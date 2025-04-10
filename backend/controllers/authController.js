import Users from "../models/auth/users.js";
import bcrypt from "bcryptjs";

class AdminAuthController {
    static async registerAdmin(req, res) {
        try {
            if (!req.body || Object.keys(req.body).length === 0) {
                return res.status(400).json({ message: "Request body is missing." });
            }

            const { name, email, password, role } = req.body;

            if (!name || !email || !password || !role) {
                return res.status(400).json({ message: "Name, email, role and password are required." });
            }

            const existingUser = await Users.findOne({ email });
            if (existingUser) {
                return res.status(409).json({ message: "Admin already exists." });
            }

            const hashedPassword = await bcrypt.hash(password, 10);

            const newAdmin = new Users({
                name,
                email,
                password: hashedPassword,
                role
            });

            await newAdmin.save();

            res.status(201).json({ message: "Admin registered successfully." });
        } catch (error) {
            res.status(500).json({ message: "Server error.", error: error.message });
        }
    }
}

export default AdminAuthController;
