import User from "../mongodb/models/User.js";

export const getProfile = async (req, res, next) => {
  try {
    const userId = req.user.id; // Retrieve user ID from the verified token
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User profile not found",
      });
    }

    // You can customize the response format as needed
    res.status(200).json({
      success: true,
      data: user,
    });
  } catch (error) {
    // Handle error and send error response
    next(error);
  }
};

export const updateProfile = async (req, res, next) => {
  try {
    const userId = req.user.id; // Retrieve user ID from the verified token
    const updatedData = req.body; // Updated profile data from request body

    const user = await User.findByIdAndUpdate(userId, updatedData, {
      new: true, // Return the updated user
    });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User profile not found",
      });
    }

    // You can customize the response format as needed
    res.status(200).json({
      success: true,
      message: "User profile updated successfully",
      data: user,
    });
  } catch (error) {
    // Handle error and send error response
    next(error);
  }
};
