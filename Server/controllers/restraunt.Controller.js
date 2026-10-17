
// Input 

import user from "../model/user.model";
import Restraunt from "../model/restraunt.model";
/**
 * Form
 *  1. Name
 *  2. Email
//  *  3. Password
 *  4. Address
 * 
 *  5. GeoLocation
 *  6. Speciality
 *  7. Restraunt Image
 * 
 *  8.GeoLocation[Longitude, Latitude]
 *  At time of requesting the api first get the Geolocation
 * @param {*} req Contain Restraunt Form
 * @param {*} res 
 * 
 * Forntend
*  function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(success, error);
        } else {
            x.innerHTML = "Geolocation is not supported by this browser.";
        }
    }
 */

/**
 * 
 * [ Front End ]                         [ Back End API ]                      [ Storage & Database ]

  |                                         |                                         |
  | 1. Sends file via FormData ------>      |                                         |
  |                                         | 2. Uploads file to Storage --------->   | [ Object Storage / Folder ]
  |                                         | <--------- Returns Public URL or Path  | (Saves raw image file)
  |                                         |                                         |
  |                                         | 3. Saves URL string to Database ---->   | [ SQL / NoSQL Database ]
  |                                         |                                         | (Saves text path only)
 */


async function handleRestrauntRegister(req, res) {
    const {
        name,
        email,
        address,

        phoneNumber,
        Speciality,
        RestrauntImage,

        Geolocation
    } = req.body;

    // z.SafePrase(req.body);

    // Check if user alredy have account
    const isUserExist = user.findOne({ email });
    if (!isUserExist) {
        return res.status(401).json({
            message: "User Dose Not Exist",
        });
    }
    // Get the GeoLocation

    // Procces the Image

    

    // Create the Restraunt
    const CreateNewRestraunt = await Restraunt.create({
        Restraunt_Owner: isUserExist.name,
        email: email,
        phoneNumber: phoneNumber,

        address: address,
        Speciality: Speciality,
        Restraunt_Image: RestrauntImage,

        location: [Geolocation.longitude, Geolocation.Latitide],

    });

    res.status(201).json({
        message: 'Restraunt Created Succesfullu',
        data: CreateNewRestraunt,
    });
};

async function handleAddItemsInMenue(req, res) {

};


async function handleChangesInSettings(req, res) {

};


async function handlePostComment(params) {

};


async function handleGetAllRestraunts(params) {

}


async function handleTableBooking(params) {

}



export {
    handleRestrauntRegister,
    handleAddItemsInMenue,
    handleChangesInSettings,
    handlePostComment,

    handleTableBooking,
    handleGetAllRestraunts,
    handleServingRestrauntInfo
}