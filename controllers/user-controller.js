const { userModel, bookModel } = require("../models/index");

exports.getAllUsers = async (req, res) => {
    const users = await userModel.find();

    if (users.length === 0) {
        res.status(404).json({
            success: false,
            message: "No users found"
        });
    }

    res.status(200).json({
        success: true,
        data: users
    })
};

exports.getUserByID = async (req, res) => {
    const { id } = req.params
    const user = await userModel.findById(id);

    if (!user) {
        return res.status(404).json({
            success: false,
            message: "User not found"
        });
    }
    res.status(200).json({
        success: true,
        data: user
    })
};

exports.CreateNewUser = async (req, res) => {
    const { data } = req.body;

    const newUser = await userModel.create(data);

    return res.status(201).json({
        success: true,
        data: newUser
    });
};

exports.updateUserById = async (req, res) => {
    const { id } = req.params;
    const { data } = req.body;
    const updatedUser = await userModel.findOneAndUpdate({
        _id: id,
    }, {
        $set: {
            ...data
        }
    }, {
        new: true
    });

    return res.status(200).json({
        success: true,
        data: updatedUser
    });
};

exports.deleteUser = async (req, res) => {
    const { id } = req.params;
    const user = await userModel.deleteOne({
        _id: id
    });

    if (!user) {
        return res.status(404).json({
            success: false,
            message: "User not found"
        });
    }

    return res.status(202).json({
        success: true,
        message: "User successfully deleted"
    });
};

exports.getSubscriptionDetails = async (req, res,) => {
    const { id } = req.params;
    const user = await userModel.findById({
        _id: id
    });

    if (!user) {
        return res.status(404).json({
            success: false,
            message: "User not found"
        });
    }

    const getDateInDays = (data = "") => {
        let date;
        if (data === "") {
            date = new Date();
        }
        else {
            date = new Date(data);
        }
        let days = Math.floor(date / (1000 * 60 * 60 * 24));
        return days;
    };

    const getSubscriptionType = (date) => {
        if (user.subscriptionType === "Basic") {
            date = date + 90;
        }
        else if (user.subscriptionType === "Standard") {
            date = date + 180;
        }
        else if (user.subscriptionType === "Premium") {
            date = date + 365;
        }
        return date;
    };

    let returnDate = getDateInDays(user.returnDate);
    let currentDate = getDateInDays();
    let subscriptionDate = getDateInDays(user.subscriptionDate);
    let subscriptionExpiryDate = getSubscriptionType(subscriptionDate);

    const data = {
        ...user._doc,
        subscriptionExpired: subscriptionExpiryDate < currentDate,
        daysLeftForExpiration:
            subscriptionExpiryDate <= currentDate ? 0 : subscriptionExpiryDate - currentDate,
        fine:
            returnDate < currentDate ? subscriptionExpiryDate <= currentDate ? 200 : 100 : 0
    };

    res.status(200).json({
        success: true,
        data
    });
};