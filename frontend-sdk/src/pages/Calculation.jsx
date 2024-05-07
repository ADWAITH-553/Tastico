
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer,toast } from 'react-toastify';
function CalculationTable() {
  const [dishes, setDishes] = useState([]);
  const [attendees, setAttendees] = useState({});
  const [totals, setTotals] = useState({});
  const id=window.localStorage.getItem('bookcater');
  useEffect(() => {
axios.post('http://localhost:3001/auth/caterbyid',{id})
      .then(response => {
        setDishes(response.data.dishavail);
      })
      .catch(error => {
        console.error('There was an error fetching the dishes!', error);
      });
  }, []);

  const handleAttendeeChange = (_id, value) => {
    const numAttendees = value ? parseInt(value, 10) : 0;
    setAttendees({ ...attendees, [_id]: numAttendees });
    setTotals({ ...totals, [_id]: numAttendees * dishes.find(dish => dish._id === _id).price });
  };

  const calculateGrandTotal = () => {
    return Object.values(totals).reduce((acc, curr) => acc + curr, 0);
  };
  async function request(){
    toast.success("request has been sent")
    alert('request has been sent')
    const dataToSubmit = {
        dishes: dishes.map(dish => ({
          ...dish,
          attendees: attendees[dish._id] || 0,
          totalCost: attendees[dish._id] ? attendees[dish._id] * dish.price : 0
        }))
      };
      let total=calculateGrandTotal();
      console.log(total)
      const date=await axios.post('http://localhost:3001/auth/date',{desc:window.localStorage.getItem("description")})
      console.log(date.data[0].deadline)
      axios.post('http://localhost:3001/auth/book', {dataToSubmit:dataToSubmit.dishes,description:window.localStorage.getItem("description"),
      cname:window.localStorage.getItem("catername"),uname:window.localStorage.getItem("Uname"),uid:window.localStorage.getItem("userid"),
      cid:window.localStorage.getItem("bookcater"),total:total,date:date.data[0].deadline
     
    })
        .then(response => {
          console.log('Data submitted successfully:', response.data);
        })
        .catch(error => {
          console.error('There was an error submitting the data!', error);
        });
  }
  return (
    <div className="container mx-auto mt-5">
        <div className="flex items-center mobile:justify-center sm:justify-start w-1/4 mobile:space-2  sm:space-x-4 mobile:space-x-2 ">
        <img
          src="https://cdn-icons-png.flaticon.com/512/1683/1683828.png"
          className="px-1 sm:h-12 mobile:h-8"
          alt="logo"
        />
        <h1  className="sm:text-2xl mobile:text-xl font-bold text-red-500">
          TASTICO
        </h1>
      </div>
     <hr />
     <div></div>
      <table className="min-w-full divide-y my-24 divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Dish Name
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Price (₹)
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              No. of People
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Total Cost (₹)
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {dishes.map((dish) => (
            <tr key={dish._id}>
              <td className="px-6 py-4 whitespace-nowrap">
                {dish.name}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {dish.price}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <input
                  type="number"
                  className="mt-1 block w-full border-gray-300 shadow-sm sm:text-sm rounded-md"
                  value={attendees[dish._id] || ''}
                  onChange={(e) => handleAttendeeChange(dish._id, e.target.value)}
                  min="0"
                />
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {totals[dish._id] || 0}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="text-right mt-4">
        <span className="text-lg font-semibold">
          Grand Total: ₹{calculateGrandTotal()}
        </span>
      </div>
      <button onClick={request} class="bg-green-400 hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
          
          REQUEST FOR BOOKING
          </button>
    </div>
  );
}

export default CalculationTable;
