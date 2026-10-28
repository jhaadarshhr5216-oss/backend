import { v2 } from "cloudinary";
import fs from "fs";



cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET
});


const uploadToCloudinary = async (localfilePath) => {
  try {
    if (!localfilePath) return null; 
        
    const result = await cloudinary.uploader.upload(localfilePath, { 
        resource_type: "auto"  })
        console.log("Cloudinary upload result:", result.url);
        return result ;
    } catch (error) {
        fs.unlinkSync(localfilePath);
        return null;

    }}
    export  {uploadToCloudinary};