const express = require("express");
const { users } = require("./data/users.json");

const app = express();

const PORT = 8081;

app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).json({
        message: "Server is running"
    });
});

//Get all list of users
app.get('/users', (req, res) => {
    res.status(200).json({
        success: true,
        data: users
    })
});

//Get a user by ID
app.get('/users/:id', (req, res) => {
    const { id } = req.params
    const user = users.find((each) => each.id === id);
    if (!user) {
        return res.status(404).json({
            success: false,
            message: "User not found"
        });
    }
    res.status(200).json({
        success: true,
        data: users
    })
});

//Create a new user
app.post('/users', (req, res) => {
    const { id, name, surname, email, subscriptionType, subscriptionDate } = req.body;

    const user = users.find((each) => each.id === id);

    if (user) {
        return res.status(404).json({
            success: false,
            message: "User exists with this ID"
        });
    }

    users.push({
        id,
        name,
        surname,
        email,
        subscriptionType,
        subscriptionDate
    });

    return res.status(201).json({
        success: true,
        data: users
    });
});

//Update a user details by ID
app.put('/users/:id', (req, res) => {
    const { id } = req.params;
    const { data } = req.body;
    const user = users.find((each) => each.id === id);

    if (!user) {
        return res.status(404).json({
            success: false,
            message: "User Not Found"
        });
    }

    const updatedUser = users.map((each) => {
        if (each.id === id) {
            return {
                ...each,
                ...data
            };
        }
        return each;
    });

    return res.status(200).json({
        success: true,
        data: updatedUser
    });
});

app.get('*', (req, res) => {
    res.status(404).json({
        message: "This route does not exist"
    });
});

app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
});