import { v2 as cloudinary } from "cloudinary";
import productModel from "../models/productModel.js";

// Function for add product 

const addProduct = async (req, res) => {
    try {
        const { name, description, price, category, subcategory, sizes, bestseller, customize } = req.body;

        const image1 = req.files.image1 && req.files.image1[0];
        const image2 = req.files.image2 && req.files.image2[0];
        const image3 = req.files.image3 && req.files.image3[0];
        const image4 = req.files.image4 && req.files.image4[0];

        const images = [image1, image2, image3, image4].filter(image => image !== undefined);

        let imagesUrl = await Promise.all(
            images.map(async (item) => {
                let result = await cloudinary.uploader.upload(item.path, { resource_type: 'image' });
                return result.secure_url;
            })
        )

        if (!name || !description || !price || !category || !subcategory || !sizes || !bestseller || !customize) {
            return res.status(400).json({ success: false, message: 'All fields are required' });
        }
        
        const productData = {
            name,
            description,
            price: Number(price),
            images: imagesUrl,
            category,
            subcategory,
            sizes: JSON.parse(sizes),
            bestseller: bestseller === "true" ? true : false,
            customize: customize === "true" ? true : false
        }
        
        const product = new productModel(productData);
        await product.save();
        
        res.status(201).json({ success: true, message: 'Product added successfully', product });
        
    } catch (error) {
        console.log(error);
        res.status(404).json({ success: false, message: error.message });
    }
}

// Function for get all products

const getAllProducts = async (req, res) => { 
    try {

        const products = await productModel.find({});
        res.json({ success: true, products });

    } catch (error) { 
        console.log(error);
        res.status(404).json({ success: false, message: error.message });
    }
}

// Function for delete product

const deleteProduct = async (req, res) => { 
    try {
        await productModel.findByIdAndDelete(req.body.id);
        res.json({ success: true, message: 'Product deleted successfully' });
        
    } catch (error) { 
        console.log(error);
        res.status(404).json({ success: false, message: error.message });
    }
}

// Function for single product info

const getSingleProduct = async (req, res) => { 
    try {
        const { productId } = req.body;
        const product = await productModel.findById(productId);
        res.json({ success: true, product });
        
    } catch (error) { 
        console.log(error);
        res.status(404).json({ success: false, message: error.message });
    }
}

export { addProduct, deleteProduct, getAllProducts, getSingleProduct };
