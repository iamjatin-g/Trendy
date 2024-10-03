import logo from './trendy_logo.png'
import logo_bold from './trendy_logo_bold.png'
import logo_bold2 from './trendy_logo2_bold.png'
import hero_img from './hero_img.png'
import hero_img2 from './hero_img2.png'
import hero_img3 from './hero_img3.png'
import about from './about_img.jpg'
import contact from './contact_img.jpg'
// Topwear
import hoodie1_1 from './regular_hoodie_black_1_cropped.png'
import r_hoodie1_1 from './purple_hoodie_regular.png'
import r_hoodie2_1 from './lavender_hoodie_regular.png'
import o_hoodie1_1 from './grey_hoodie_oversized.png'
import o_hoodie2_1 from './coffee_hoodie_oversized.png'
import r_tshirt1_1 from './black_tshirt_regular.png'
import r_tshirt2_1 from './red_tshirt_regular.png'
import o_tshirt1_1 from './grey_tshirt_oversized.png'
import o_tshirt2_1 from './maroon_tshirt_oversized.png'
import shirt1_1 from './yellow_shirt.png'
// Winterwear
import jacket1_1 from './beige_jacket_winter.png'
import jacket2_1 from './pista_jacket_winter.png'
// Bottomwear
import cargo1_1 from './khakhi_men_cargo.png'
import cargo2_1 from './black_cargo_women.png'
import trouser1_1 from './black_trouser_men.png'
import trouser2_1 from './black_trouser_women.png'
import track1_1 from './grey_trackpant_men.png'
import track2_1 from './cream_trackpant_women.png'
import jeans1_1 from './regular_jeans_men.png'
import jeans2_1 from './baggy_jeans_men.png'
import jeans3_1 from './regular_jeans_women.png'


const desc = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis quidem ullam dolores officia aperiam. Consequatur qui esse iste culpa laborum cupiditate."

export const assets = {
    logo,
    logo_bold,
    logo_bold2,
    hero_img,
    hero_img2,
    hero_img3,
    about,
    contact
}

export const products = [
    // 1
    {
        _id: "01",
        name: "Men Regular Fit Hoodie",
        description: desc,
        price: "30",
        image: [r_hoodie1_1, r_hoodie1_1, r_hoodie1_1, r_hoodie1_1],
        category: "Men",
        subcategory: "Topwear",
        sizes: ["S","M","L","XL"],
        bestseller: false,
        customize: true
    },
    // 2
    {
        _id: "02",
        name: "Men Regular Fit T-shirt",
        description: desc,
        price: "20",
        image: [r_tshirt1_1],
        category: "Men",
        subcategory: "Topwear",
        sizes: ["S","M","L","XL"],
        bestseller: false,
        customize: true
    },
    // 3
    {
        _id: "03",
        name: "Women Regular Fit T-shirt",
        description: desc,
        price: "15",
        image: [r_tshirt2_1],
        category: "Women",
        subcategory: "Topwear",
        sizes: ["S","M","L","XL"],
        bestseller: false,
        customize: true
    },
    // 4
    {
        _id: "04",
        name: "Women Over-Sized T-shirt",
        description: desc,
        price: "20",
        image: [o_tshirt1_1, o_tshirt1_1, o_tshirt1_1, o_tshirt1_1],
        category: "Women",
        subcategory: "Topwear",
        sizes: ["S","M","L","XL"],
        bestseller: false,
        customize: true
    },
    // 5
    {
        _id: "05",
        name: "Men Over-Sized T-shirt",
        description: desc,
        price: "25",
        image: [o_tshirt2_1],
        category: "Men",
        subcategory: "Topwear",
        sizes: ["S","M","L","XL"],
        bestseller: false,
        customize: true
    },
    // 6
    {
        _id: "06",
        name: "Women Winter Jacket",
        description: desc,
        price: "50",
        image: [jacket1_1],
        category: "Women",
        subcategory: "Winterwear",
        sizes: ["S","M","L","XL"],
        bestseller: false,
        customize: true
    },
    // 7
    {
        _id: "07",
        name: "Men Winter Jacket",
        description: desc,
        price: "50",
        image: [jacket2_1],
        category: "Men",
        subcategory: "Winterwear",
        sizes: ["S","M","L","XL"],
        bestseller: true,
        customize: true
    },
    // 8
    {
        _id: "08",
        name: "Women Regular Fit Hoodie",
        description: desc,
        price: "50",
        image: [r_hoodie2_1],
        category: "Women",
        subcategory: "Topwear",
        sizes: ["S","M","L","XL"],
        bestseller: false,
        customize: true
    },
    // 9
    {
        _id: "09",
        name: "Women Over-Sized Hoodie",
        description: desc,
        price: "45",
        image: [o_hoodie1_1],
        category: "Women",
        subcategory: "Topwear",
        sizes: ["S","M","L","XL"],
        bestseller: true,
        customize: true
    },
    // 10
    {
        _id: "10",
        name: "Men Over-Sized Hoodie",
        description: desc,
        price: "45",
        image: [o_hoodie2_1],
        category: "Men",
        subcategory: "Topwear",
        sizes: ["S","M","L","XL"],
        bestseller: true,
        customize: true
    },
    // 11
    {
        _id: "11",
        name: "Men Shirt",
        description: desc,
        price: "40",
        image: [shirt1_1],
        category: "Men",
        subcategory: "Topwear",
        sizes: ["M","L","XL"],
        bestseller: false,
        customize: false
    },
    // 12
    {
        _id: "12",
        name: "Men Cargo Pants",
        description: desc,
        price: "25",
        image: [cargo1_1],
        category: "Men",
        subcategory: "Bottomwear",
        sizes: ["S","M","L","XL"],
        bestseller: false,
        customize: false
    },
    // 13
    {
        _id: "13",
        name: "Men Regular Fit Trouser",
        description: desc,
        price: "30",
        image: [trouser1_1],
        category: "Men",
        subcategory: "Bottomwear",
        sizes: ["M","L","XL"],
        bestseller: false,
        customize: false
    },
    // 14
    {
        _id: "14",
        name: "Men Track Pant",
        description: desc,
        price: "20",
        image: [track1_1],
        category: "Men",
        subcategory: "Bottomwear",
        sizes: ["S","M","L","XL"],
        bestseller: false,
        customize: false
    },
    // 15
    {
        _id: "15",
        name: "Men Regular Fit Jeans",
        description: desc,
        price: "15",
        image: [jeans1_1],
        category: "Men",
        subcategory: "Bottomwear",
        sizes: ["M","L","XL"],
        bestseller: false,
        customize: false
    },
    // 16
    {
        _id: "16",
        name: "Men Baggy Jeans",
        description: desc,
        price: "20",
        image: [jeans2_1],
        category: "Men",
        subcategory: "Bottomwear",
        sizes: ["S","M","L","XL"],
        bestseller: false,
        customize: false
    },
    // 17
    {
        _id: "17",
        name: "Women Regular Fit Trouser",
        description: desc,
        price: "15",
        image: [trouser2_1],
        category: "Women",
        subcategory: "Bottomwear",
        sizes: ["S","M","L","XL"],
        bestseller: false,
        customize: false
    },
    // 18
    {
        _id: "18",
        name: "Women Cargo Pants",
        description: desc,
        price: "20",
        image: [cargo2_1],
        category: "Women",
        subcategory: "Bottomwear",
        sizes: ["S","M","L","XL"],
        bestseller: false,
        customize: false
    },
    // 19
    {
        _id: "19",
        name: "Women Track Pant",
        description: desc,
        price: "20",
        image: [track2_1],
        category: "Women",
        subcategory: "Bottomwear",
        sizes: ["S","M","L","XL"],
        bestseller: true,
        customize: false
    },
    // 20
    {
        _id: "20",
        name: "Women Regular Fit Jeans",
        description: desc,
        price: "25",
        image: [jeans3_1],
        category: "Women",
        subcategory: "Bottomwear",
        sizes: ["M","L","XL"],
        bestseller: true,
        customize: false
    },

]