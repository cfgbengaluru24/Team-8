import React from 'react';
import './surveyForm.css';

const SurveyForm = () => {
  return (
    <div className="container cont">
      <h2>Survey Form</h2>
      <form>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label>Name:</label>
              <input type="text" name="name" className="form-control" />
            </div>
            <div className="form-group">
              <label>Gender:</label>
              <select name="gender" className="form-control">
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <div className="form-group">
              <label>Age:</label>
              <input type="number" name="age" className="form-control" />
            </div>
            <div className="form-group">
              <label>Marital Status:</label>
              <select name="maritalStatus" className="form-control">
                <option value="Married">Married</option>
                <option value="Unmarried">Unmarried</option>
              </select>
            </div>
            <div className="form-group">
              <label>Number of goats:</label>
              <input type="number" name="goats" className="form-control" />
            </div>
            <div className="form-group">
              <label>Number of cows/buffaloes:</label>
              <input type="number" name="cowsBuffaloes" className="form-control" />
            </div>
            <div className="form-group">
              <label>Number of poultry:</label>
              <input type="number" name="poultry" className="form-control" />
            </div>
            <div className="form-group">
              <label>Are you engaged in agriculture?</label>
              <select name="engagedInAgriculture" className="form-control">
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
            <div className="form-group">
              <label>Type of crops:</label>
              <input type="text" name="cropType" className="form-control" />
            </div>
            <div className="form-group">
              <label>Do you have any health issues?</label>
              <select name="healthIssues" className="form-control">
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
            <div className="form-group">
              <label>Details of health issues:</label>
              <input type="text" name="healthIssueDetails" className="form-control" />
            </div>
            <div className="form-group">
              <label>How many children do you have?</label>
              <input type="number" name="children" className="form-control" />
            </div>
            <div className="form-group">
              <label>Number of children below the age of 12:</label>
              <input type="number" name="childrenBelow12" className="form-control" />
            </div>
          </div>

          <div className="col-md-6">
            <div className="form-group">
              <label>Number of children between the ages of 12 and 18:</label>
              <input type="number" name="children12To18" className="form-control" />
            </div>
            <div className="form-group">
              <label>Type of house:</label>
              <select name="houseType" className="form-control">
                <option value="Pucca">Pucca</option>
                <option value="Semi-pucca">Semi-pucca</option>
                <option value="Kaccha">Kaccha</option>
              </select>
            </div>
            <div className="form-group">
              <label>Number of rooms:</label>
              <input type="number" name="rooms" className="form-control" />
            </div>
            <div className="form-group">
              <label>Does your house have a toilet?</label>
              <select name="houseToilet" className="form-control">
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
            <div className="form-group">
              <label>Do you have access to electricity?</label>
              <select name="electricityAccess" className="form-control">
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
            <div className="form-group">
              <label>Do you have access to water?</label>
              <select name="waterAccess" className="form-control">
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
            <div className="form-group">
              <label>Do you have any household items?</label>
              <select name="householdItems" className="form-control">
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
            <div className="form-group">
              <label>Details of household items:</label>
              <input type="text" name="householdItemsDetails" className="form-control" />
            </div>
            <div className="form-group">
              <label>Do you have a bank account?</label>
              <select name="bankAccount" className="form-control">
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
            <div className="form-group">
              <label>Are you part of a SHG (Self-Help Group)?</label>
              <select name="shg" className="form-control">
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
            <div className="form-group">
              <label>Details of SHG:</label>
              <input type="text" name="shgDetails" className="form-control" />
            </div>
            <div className="form-group">
              <label>Have you received any type of government benefits?</label>
              <select name="governmentBenefits" className="form-control">
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
            <div className="form-group">
              <label>Details of government benefits:</label>
              <input type="text" name="governmentBenefitsDetails" className="form-control" />
            </div>
            <div className="form-group">
              <label>Are there any other activities you are involved in?</label>
              <input type="text" name="otherActivities" className="form-control" />
            </div>
          </div>
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default SurveyForm;
