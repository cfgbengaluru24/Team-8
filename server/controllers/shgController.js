import SHG from "../models/shgModel.js";
// Controller function to create a new SHG
const createSHG = async (req, res) => {
  try {
    const { name, memberList, location, CurrFund, CurrLoan, BusinessMember, baseline, endline } = req.body;

    // Create a new SHG document using the data from the request body
    const newSHG = new SHG({
      name,
      memberList,
      location,
      CurrFund,
      CurrLoan,
      BusinessMember,
      baseline,
      endline
    });

    // Save the new SHG document to the database
    await newSHG.save();

    // Send a success response
    res.status(201).json({
      success: true,
      message: 'SHG created successfully',
      data: newSHG
    });
  } catch (error) {
    // Send an error response
    res.status(500).json({
      success: false,
      message: 'Error creating SHG',
      error: error.message
    });
  }
};

const getallshg = async (req, res) => {
  try {
      // Fetch all SHG records from the database
      const shgs = await SHG.find({});
  
      // Send the fetched SHG records in the response
      res.status(200).json({
      success: true,
      data: shgs,
      message: 'Successfully fetched all SHG records'
      });
  } catch (error) {
      // Handle errors and send a 500 status code with an error message
      res.status(500).json({
      success: false,
      message: 'Failed to fetch SHG records',
      error: error.message
      });
    }
};


const addMember =  async (req, res) => {
    const { shgId, newMember } = req.body;
  
    if (!shgId || !newMember || !newMember.memberId) {
      return res.status(400).json({ error: 'SHG ID and new member details with memberId are required.' });
    }
  
    try {
      const shg = await SHG.findOne({ _id: shgId });
  
      if (!shg) {
        return res.status(404).json({ error: 'SHG not found with the provided ID.' });
      }
  
      const existingMember = shg.memberList.find(member => member.memberId == newMember.memberId);
     
  
      if (existingMember) {
        await SHG.updateOne(
            { _id: shgId, 'memberList.memberId': newMember.memberId },
            { $set: { 'memberList.$.isActive': true } }
          );
        return res.status(200).json({ message: 'Member status updated successfully.', shg });
      } else {
        await SHG.updateOne(
            { _id: shgId },
            { $push: { memberList: newMember } }
          );
    
          // Fetch the updated SHG document
          const updatedSHG = await SHG.findOne({ _id: shgId });
    
          return res.status(200).json({ message: 'New member added successfully.', shg: updatedSHG });
      }
    } catch (error) {
      console.error('Error handling request:', error);
      return res.status(500).json({ error: 'An error occurred while processing your request.' });
    } 
};



const multipleUpdate = async (req, res) => {
    const { shgId, updates } = req.body;
  
    if (!shgId || !updates || typeof updates !== 'object') {
      return res.status(400).json({ error: 'SHG ID and updates object are required.' });
    }
  
    try {
      const result = await SHG.updateOne(
        { _id: shgId },
        { $set: updates }
      );
  
      if (result.nModified === 0) {
        return res.status(404).json({ error: 'SHG not found or no changes made.' });
      }
  
      // Fetch the updated SHG document
      const updatedSHG = await SHG.findOne({ _id: shgId });
  
      return res.status(200).json({ message: 'SHG updated successfully.', shg: updatedSHG });
    } catch (error) {
      // Handle errors and return an error response
      console.error('Error handling request:', error);
      return res.status(500).json({ error: 'An error occurred while processing your request.' });
    } 
    
  };

  export default createSHG
  export {addMember,multipleUpdate,getallshg}