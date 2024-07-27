import React from 'react';
import './SurveyForm.css';

const SurveyForm = () => {
  return (
    <div className="container">
      <h2>Survey Form</h2>
      <form>
        <label>
          Survey Type:
          <select name="surveyType">
            <option value="Baseline data">Baseline data</option>
            <option value="Endline data">Endline data</option>
          </select>
        </label>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <label>
          Age:
          <input type="number" name="age" />
        </label>
        <label>
          Mobile/Phone Number:
          <input type="text" name="phoneNumber" />
        </label>
        <label>
          Village:
          <input type="text" name="village" />
        </label>
        <label>
          District:
          <input type="text" name="district" />
        </label>
        <label>
          Religion:
          <select name="religion">
            <option value="Hindu">Hindu</option>
            <option value="Muslim">Muslim</option>
            <option value="Christian">Christian</option>
            <option value="Sikh">Sikh</option>
            <option value="Jain">Jain</option>
            <option value="Buddist">Buddist</option>
            <option value="Other">Other</option>
            <option value="Aethist">Aethist</option>
            <option value="None">None</option>
          </select>
        </label>
        <label>
          Caste:
          <select name="caste">
            <option value="SC">SC</option>
            <option value="ST">ST</option>
            <option value="OBC">OBC</option>
            <option value="Others">Others</option>
          </select>
        </label>
        <label>
          Education Qualifications:
          <select name="education">
            <option value="Illiterate">Illiterate</option>
            <option value="Standard 1 – 5">Standard 1 – 5</option>
            <option value="Standard 6 –10 (not completed)">Standard 6 –10 (not completed)</option>
            <option value="Completed standard 10">Completed standard 10</option>
            <option value="Standard 11 – 12 (not completed)">Standard 11 – 12 (not completed)</option>
            <option value="Completed standard 12">Completed standard 12</option>
            <option value="Degree (incomplete)">Degree (incomplete)</option>
            <option value="Graduate">Graduate</option>
            <option value="Other">Other (specify)</option>
          </select>
        </label>
        <label>
          Are there people in your life who will support you starting a business?
          <select name="businessSupport">
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </label>
        <label>
          Main work or job:
          <input type="text" name="mainJob" />
        </label>
        <label>
          Secondary work or job:
          <input type="text" name="secondaryJob" />
        </label>
        <label>
          Have you received any type of training?
          <select name="trainingReceived">
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </label>
        <label>
          Type of training received:
          <select name="trainingType">
            <option value="Book Keeping">Book Keeping</option>
            <option value="Skills Training">Skills Training</option>
            <option value="Leadership">Leadership</option>
            <option value="How to start business">How to start business</option>
            <option value="Training on savings">Training on savings</option>
            <option value="Accessing Social entitlements">Accessing Social entitlements</option>
            <option value="Other">Others</option>
          </select>
        </label>
        <label>
          Will this training help your business?
          <select name="trainingHelpBusiness">
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </label>
        <label>
          Do you have any skills?
          <select name="skills">
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </label>
        <label>
          First type of skills:
          <input type="text" name="firstSkill" />
        </label>
        <label>
          Have you earned from this skill?
          <select name="earnedFromFirstSkill">
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </label>
        <label>
          Second type of skills:
          <input type="text" name="secondSkill" />
        </label>
        <label>
          Have you earned from this skill?
          <select name="earnedFromSecondSkill">
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </label>
        <label>
          Has an institution given you any type of support?
          <select name="institutionSupport">
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </label>
        <label>
          Benefit from the institution:
          <input type="text" name="institutionBenefit" />
        </label>
        <label>
          Are you engaged in any kind of physical labor?
          <select name="physicalLabor">
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </label>
        <label>
          Type of physical labor you are engaged in:
          <input type="text" name="physicalLaborType" />
        </label>
        <label>
          Daily earnings (INR):
          <input type="number" name="dailyEarnings" />
        </label>
        <label>
          Number of working days per month:
          <input type="number" name="workingDaysPerMonth" />
        </label>
        <label>
          Do you own land or livestock?
          <select name="landOrLivestock">
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </label>
        <label>
          Land ownership owned by family:
          <input type="text" name="landOwnershipFamily" />
        </label>
        <label>
          Number of acres/guntas:
          <input type="number" name="acres" />
        </label>
        <label>
          Land ownership owned individually:
          <input type="text" name="landOwnershipIndividual" />
        </label>
        <label>
          Number of acres/guntas:
          <input type="number" name="acresIndividual" />
        </label>
        <label>
          Collective farming:
          <input type="text" name="collectiveFarming" />
        </label>
        <label>
          Number of acres/guntas:
          <input type="number" name="acresCollective" />
        </label>
        <label>
          Are you/were practicing agriculture:
          <input type="text" name="practicingAgriculture" />
        </label>
        <label>
          Whose land are you practicing agriculture on:
          <input type="text" name="landPracticingOn" />
        </label>
        <label>
          Name of the crop cultivated:
          <input type="text" name="cropCultivated" />
        </label>
        <label>
          Acres:
          <input type="number" name="cropAcres" />
        </label>
        <label>
          Seasonal:
          <select name="cropSeasonal">
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </label>
        <label>
          Expected yield in kgs/tonnes:
          <input type="number" name="expectedYield" />
        </label>
        <label>
          Amount sold (quantity):
          <input type="number" name="amountSold" />
        </label>
        <label>
          Type/means of sale:
          <input type="text" name="meansOfSale" />
        </label>
        <label>
          Amount consumed (quantity):
          <input type="number" name="amountConsumed" />
        </label>
        <label>
          Annual revenue (INR):
          <input type="number" name="annualRevenue" />
        </label>
        <label>
          Agricultural inputs - Seeds (annual amount spent):
          <input type="number" name="agriSeeds" />
        </label>
        <label>
          Agricultural inputs - Fertilizers (annual amount spent):
          <input type="number" name="agriFertilizers" />
        </label>
        <label>
          Agricultural inputs - Pesticides (annual amount spent):
          <input type="number" name="agriPesticides" />
        </label>
        <label>
          Agricultural inputs - Irrigation (annual amount spent):
          <input type="number" name="agriIrrigation" />
        </label>
        <label>
          Agricultural inputs - Labour (annual amount spent):
          <input type="number" name="agriLabour" />
        </label>
        <label>
          Agricultural inputs - Bullock Cart (annual amount spent):
          <input type="number" name="agriBullockCart" />
        </label>
        <label>
          Agricultural inputs - Tractor (annual amount spent):
          <input type="number" name="agriTractor" />
        </label>
        <label>
          Agricultural inputs - Implements (annual amount spent):
          <input type="number" name="agriImplements" />
        </label>
        <label>
          Did you have access to markets to buy inputs?
          <select name="marketAccess">
            <option value="Yes">Yes</option>
            <option value="Irregular access">Irregular access</option>
            <option value="No">No</option>
          </select>
        </label>
        <label>
          Do you own livestock?
          <select name="ownLivestock">
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </label>
        <label>
          Type of livestock:
          <input type="text" name="livestockType" />
        </label>
        <label>
          Number owned by self:
          <input type="number" name="livestockOwned" />
        </label>
        <label>
          Annual revenue from sale (INR):
          <input type="number" name="livestockRevenue" />
        </label>
        <label>
          Are you engaged in dairy farming?
          <select name="dairyFarming">
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </label>
        <label>
          Number producing milk:
          <input type="number" name="milkProducing" />
        </label>
        <label>
          Number of litres per day:
          <input type="number" name="milkLitres" />
        </label>
        <label>
          Number of months (milk produced):
          <input type="number" name="milkMonths" />
        </label>
        <label>
          Amount earned per day (INR):
          <input type="number" name="milkEarned" />
        </label>
        <label>
          Details of accommodation (type of house lived in):
          <input type="text" name="accommodation" />
        </label>
        <label>
          Mobile Smart Phone (Specify number of items):
          <input type="number" name="smartPhones" />
        </label>
        <label>
          Non-Android phone (Specify number of items):
          <input type="number" name="nonAndroidPhones" />
        </label>
        <label>
          Television (Specify number of items):
          <input type="number" name="televisions" />
        </label>
        <label>
          Radio (Specify number of items):
          <input type="number" name="radios" />
        </label>
        <label>
          Two-wheeler (Specify number of items):
          <input type="number" name="twoWheelers" />
        </label>
        <label>
          Four-wheeler (Specify number of items):
          <input type="number" name="fourWheelers" />
        </label>
        <label>
          Do you have any savings?
          <select name="savings">
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </label>
        <label>
          Where do you save? Bank:
          <input type="number" name="saveBank" />
        </label>
        <label>
          Where do you save? SHGs:
          <input type="number" name="saveSHGs" />
        </label>
        <label>
          Where do you save? Gold:
          <input type="number" name="saveGold" />
        </label>
        <label>
          Where do you save? Chits:
          <input type="number" name="saveChits" />
        </label>
        <label>
          Where do you save? In house:
          <input type="number" name="saveInHouse" />
        </label>
        <label>
          Where do you save? With community members:
          <input type="number" name="saveWithCommunity" />
        </label>
        <label>
          Where do you save? Post Office:
          <input type="number" name="savePostOffice" />
        </label>
        <label>
          Where do you save? LIC:
          <input type="number" name="saveLIC" />
        </label>
        <label>
          Have you taken any loans?
          <select name="loans">
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </label>
        <label>
          Loans taken from? SHG:
          <input type="number" name="loanSHG" />
        </label>
        <label>
          Loans taken from? Bank:
          <input type="number" name="loanBank" />
        </label>
        <label>
          Loans taken from? MFI/Moneylender:
          <input type="number" name="loanMFI" />
        </label>
        <label>
          Loans taken from? Other:
          <input type="number" name="loanOther" />
        </label>
        <label>
          Are you engaged in any form of business?
          <select name="businessEngagement">
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </label>
        <label>
          Business - 1 (Specify):
          <input type="text" name="business1" />
        </label>
        <label>
          Business - 2 (Specify):
          <input type="text" name="business2" />
        </label>
        <label>
          Number of customers you get weekly:
          <input type="number" name="weeklyCustomers" />
        </label>
        <label>
          Number of people employed:
          <input type="number" name="peopleEmployed" />
        </label>
        <label>
          From where do you do your business?:
          <input type="text" name="businessLocation" />
        </label>
        <label>
          Where do you get your material/items from?:
          <input type="text" name="businessMaterials" />
        </label>
        <label>
          Monthly revenue earned from sales or services:
          <input type="number" name="monthlyRevenue" />
        </label>
        <label>
          Expenses that need to be paid Rent:
          <input type="number" name="expensesRent" />
        </label>
        <label>
          Expenses that need to be paid Electricity:
          <input type="number" name="expensesElectricity" />
        </label>
        <label>
          Expenses that need to be paid Water:
          <input type="number" name="expensesWater" />
        </label>
        <label>
          Expenses that need to be paid Labour/Salary:
          <input type="number" name="expensesLabour" />
        </label>
        <label>
          Other expenses that need to be paid (specify):
          <input type="number" name="otherExpenses" />
        </label>
        <label>
          Percentage of revenue you reinvest into the business:
          <input type="number" name="reinvestPercentage" />
        </label>
        <label>
          Profit amount (monthly):
          <input type="number" name="profitAmount" />
        </label>
        <label>
          Percentage of income you save:
          <input type="number" name="savePercentage" />
        </label>
        <label>
          Name the government services that you use:
          <input type="text" name="govtServices" />
        </label>
        <label>
          Do you have an Aadhar Card? Provide number:
          <input type="text" name="aadharCard" />
        </label>
        <label>
          Do you have a PAN Card:
          <input type="text" name="panCard" />
        </label>
        <label>
          Do you have a Ration Card:
          <input type="text" name="rationCard" />
        </label>
        <label>
          Do you have a Bank Account:
          <input type="text" name="bankAccount" />
        </label>
        <br></br>
         <div className='button-container'>
        <button type="submit">Submit</button>
        </div>
  
      </form>
    </div>
  );
};

export default SurveyForm;
