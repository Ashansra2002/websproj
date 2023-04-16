import React, { useState } from "react";
//import axios from "axios";
import "./Register.css";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    branch: "",
    year: "",
    semester: "",
    skills: [],
    company: [],
  });

  const handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    setFormData({ ...formData, [name]: value });
  };

  /*const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://yourbackendapiurl.com/register",
        formData,
        {
          headers: {
            "api-key": "yourapikey",
          },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };*/

  return (
    <div className="container">
       <headers2>
        <div className="logo">Alumni Connect</div>
        <nav2>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="/login">Login</a></li>
          </ul>
        </nav2>
      </headers2>
      <main classname="backgrounds-image">
        
      <div className="card">
        <h1 className="title">Register</h1>
        <form /*onSubmit={handleSubmit}*/>
          <label>
            Name
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            Email
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            Password
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            Phone Number
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            Branch
            <input
              type="text"
              name="branch"
              value={formData.branch}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            Year
            <div>
              <input
                type="radio"
                id="first"
                name="year"
                value="1st"
                onChange={handleInputChange}
                required
              />
              <label htmlFor="first">1st</label>
              <input
                type="radio"
                id="second"
                name="year"
                value="2nd"
                onChange={handleInputChange}
                required
              />
              <label htmlFor="second">2nd</label>
              <input
                type="radio"
                id="third"
                name="year"
                value="3rd"
                onChange={handleInputChange}
                required
              />
              <label htmlFor="third">3rd</label>
              <input
                type="radio"
                id="fourth"
                name="year"
                value="4th"
                onChange={handleInputChange}
                required
              />
              <label htmlFor="fourth">4th</label>
            </div>
          </label>
          <label>
            Semester
            <div>
              <input
                type="radio"
                id="sem1"
                name="semester"
                value="1st"
                onChange={handleInputChange}
                required
              />
              <label htmlFor="sem1">1st</label>
              <input
                type="radio"
                id="sem2"
                name="semester"
                value="2nd"
                onChange={handleInputChange}
                required
              />
              <label htmlFor="sem2">2nd</label>
              <input
                type="radio"
                id="sem3"
                name="semester"
                value="3rd"
                onChange={handleInputChange}
                required
              />
              <label htmlFor="sem3">3rd</label>

              <input
                type="radio"
                id="sem3"
                name="semester"
                value="3rd"
                onChange={handleInputChange}
                required
              />
              <label htmlFor="sem3">3rd</label>

              <input
                type="radio"
                id="sem4"
                name="semester"
                value="4th"
                onChange={handleInputChange}
                required
              />
              <label htmlFor="sem4">4th</label>

              <input
                type="radio"
                id="sem5"
                name="semester"
                value="5th"
                onChange={handleInputChange}
                required
              />
              <label htmlFor="sem5">5th</label>

              <input
                type="radio"
                id="sem6"
                name="semester"
                value="6th"
                onChange={handleInputChange}
                required
              />
              <label htmlFor="sem6">6th</label>

              <input
                type="radio"
                id="sem7"
                name="semester"
                value="7th"
                onChange={handleInputChange}
                required
              />
              <label htmlFor="sem7">7th</label>

              <input
                type="radio"
                id="sem8"
                name="semester"
                value="8th"
                onChange={handleInputChange}
                required
              />
              <label htmlFor="sem8">8th</label>
            </div>
          </label>
          <label>
            Skills
            <div>
              <input
                type="checkbox"
                id="skill1"
                name="skills"
                value="skill1"
                onChange={handleInputChange}
              />
              <label htmlFor="skill1">Skill 1</label>
              <input
                type="checkbox"
                id="skill2"
                name="skills"
                value="skill2"
                onChange={handleInputChange}
              />
              <label htmlFor="skill2">Skill 2</label>
              <input
                type="checkbox"
                id="skill3"
                name="skills"
                value="skill3"
                onChange={handleInputChange}
              />
              <label htmlFor="skill3">Skill 3</label>
            </div>
          </label>
          <label>
            Company
            <div>
              <input
                type="checkbox"
                id="company1"
                name="company"
                value="company1"
                onChange={handleInputChange}
              />
              <label htmlFor="company1">Company 1</label>
              <input
                type="checkbox"
                id="company2"
                name="company"
                value="company2"
                onChange={handleInputChange}
              />
              <label htmlFor="company2">Company 2</label>
              <input
                type="checkbox"
                id="company3"
                name="company"
                value="company3"
                onChange={handleInputChange}
              />
              <label htmlFor="company3">Company 3</label>
            </div>
          </label>
          <button type="submit">Register</button>
        </form>
      </div>
      </main>
      <footer2>
        <p>"Stay connected with your alumni community"</p>
      </footer2>
    </div>
  );
};

export default Register;