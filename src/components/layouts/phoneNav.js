import React from "react";



function PhoneNav() {
 const properties = {
        service: "How it works",
        about: "About us",
        plans: "plans",
      };
  return (
    <div>
      <ul>
        <li>{properties.service}</li>
        <li>{properties.about}</li>
        <li>{properties.plans}</li>
      </ul>
    </div>
  );
}

export default PhoneNav;
