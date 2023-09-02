
const { ProductModel } = require("../model/productModel")





const addProducts = async (req, res) => {
    const { title, description, price, availability, category } = req.body

    try {

        const products = new ProductModel({ title, description, price, availability, category })
        await products.save()
        return res.status(201).send({ msg: "product addedd successfully" })

    } catch (err) {
        res.status(500).send({ msg: "something went wrong try again hj" })
    }
}

const getProductsByCategory = async (req, res) => {
    try {
        const category = req.query.category

        const products = await ProductModel.find({ category })
        if (products.length === 0) {
            return res.status(200).send({ msg: "no products found" })
        }
        //console.log(products)
        res.status(200).send({ products: products })


    } catch (err) {
        res.status(500).send({ msg: "something went wrong try again hj" })
    }
}

const getproductById = async (req, res) => {
    try {
        const productId = req.params.productId
        const product = await ProductModel.findById({ _id: productId })
        //console.log(productId, "prooooo")
        res.status(200).send({ product: product })

    } catch (err) {
        res.status(500).send({ msg: "something went wrong try again " })
    }
}

const RemoveProducts = async (req, res) => {
    try {

        const { ProductId } = req.params;
        await ProductModel.findByIdAndDelete(
            { _id: ProductId },
            { availability: true }
        );
        res.status(201).send({ msg: "particular Product has been removed" });
    } catch (error) {
        console.log("error", error);
        res.status(500).send(error);
    }
};

const updateProducts = async (req, res) => {
    try {

        const payload = req.body;

        const id = req.params.id
        await FlightModel.findByIdAndUpdate({ _id: id }, payload)

        return res.status(201).send({ msg: "particular Product has been updated" });



    } catch (error) {
        console.log("error", error);
        res.status(500).send(error);
    }
};

module.exports = {
    addProducts,
    getProductsByCategory,
    getproductById,
    RemoveProducts,
    updateProducts
}
