import React, { useState } from "react";
import Score from "./score";

let country = [
  { country: "Afghanistan", flag: "🇦🇫" },
  { country: "Aland Islands", flag: "🇦🇽" },
  { country: "Albania", flag: "🇦🇱" },
  { country: "Algeria", flag: "🇩🇿" },
  { country: "American Samoa", flag: "🇦🇸" },
  { country: "Andorra", flag: "🇦🇩" },
  { country: "Angola", flag: "🇦🇴" },
  { country: "Anguilla", flag: "🇦🇮" },
  { country: "Antarctica", flag: "🇦🇶" },
  { country: "Antigua And Barbuda", flag: "🇦🇬" },
  { country: "Argentina", flag: "🇦🇷" },
  { country: "Armenia", flag: "🇦🇲" },
  { country: "Aruba", flag: "🇦🇼" },
  { country: "Australia", flag: "🇦🇺" },
  { country: "Austria", flag: "🇦🇹" },
  { country: "Azerbaijan", flag: "🇦🇿" },
  { country: "Bahrain", flag: "🇧🇭" },
  { country: "Bangladesh", flag: "🇧🇩" },
  { country: "Barbados", flag: "🇧🇧" },
  { country: "Belarus", flag: "🇧🇾" },
  { country: "Belgium", flag: "🇧🇪" },
  { country: "Belize", flag: "🇧🇿" },
  { country: "Benin", flag: "🇧🇯" },
  { country: "Bermuda", flag: "🇧🇲" },
  { country: "Bhutan", flag: "🇧🇹" },
  { country: "Bolivia", flag: "🇧🇴" },
  { country: "Bonaire, Sint Eustatius and Saba", flag: "🇧🇶" },
  { country: "Bosnia and Herzegovina", flag: "🇧🇦" },
  { country: "Botswana", flag: "🇧🇼" },
  { country: "Bouvet Island", flag: "🇧🇻" },
  { country: "Brazil", flag: "🇧🇷" },
  { country: "British Indian Ocean Territory", flag: "🇮🇴" },
  { country: "Brunei", flag: "🇧🇳" },
  { country: "Bulgaria", flag: "🇧🇬" },
  { country: "Burkina Faso", flag: "🇧🇫" },
  { country: "Burundi", flag: "🇧🇮" },
  { country: "Cambodia", flag: "🇰🇭" },
  { country: "Cameroon", flag: "🇨🇲" },
  { country: "Canada", flag: "🇨🇦" },
  { country: "Cape Verde", flag: "🇨🇻" },
  { country: "Cayman Islands", flag: "🇰🇾" },
  { country: "Central African Republic", flag: "🇨🇫" },
  { country: "Chad", flag: "🇹🇩" },
  { country: "Chile", flag: "🇨🇱" },
  { country: "China", flag: "🇨🇳" },
  { country: "Christmas Island", flag: "🇨🇽" },
  { country: "Cocos (Keeling) Islands", flag: "🇨🇨" },
  { country: "Colombia", flag: "🇨🇴" },
  { country: "Comoros", flag: "🇰🇲" },
  { country: "Congo", flag: "🇨🇬" },
  { country: "Cook Islands", flag: "🇨🇰" },
  { country: "Costa Rica", flag: "🇨🇷" },
  { country: "Cote D'Ivoire (Ivory Coast)", flag: "🇨🇮" },
  { country: "Croatia", flag: "🇭🇷" },
  { country: "Cuba", flag: "🇨🇺" },
  { country: "Curaçao", flag: "🇨🇼" },
  { country: "Cyprus", flag: "🇨🇾" },
  { country: "Czech Republic", flag: "🇨🇿" },
  { country: "Democratic Republic of the Congo", flag: "🇨🇩" },
  { country: "Denmark", flag: "🇩🇰" },
  { country: "Djibouti", flag: "🇩🇯" },
  { country: "Dominica", flag: "🇩🇲" },
  { country: "Dominican Republic", flag: "🇩🇴" },
  { country: "East Timor", flag: "🇹🇱" },
  { country: "Ecuador", flag: "🇪🇨" },
  { country: "Egypt", flag: "🇪🇬" },
  { country: "El Salvador", flag: "🇸🇻" },
  { country: "Equatorial Guinea", flag: "🇬🇶" },
  { country: "Eritrea", flag: "🇪🇷" },
  { country: "Estonia", flag: "🇪🇪" },
  { country: "Ethiopia", flag: "🇪🇹" },
  { country: "Falkland Islands", flag: "🇫🇰" },
  { country: "Faroe Islands", flag: "🇫🇴" },
  { country: "Fiji Islands", flag: "🇫🇯" },
  { country: "Finland", flag: "🇫🇮" },
  { country: "France", flag: "🇫🇷" },
  { country: "French Guiana", flag: "🇬🇫" },
  { country: "French Polynesia", flag: "🇵🇫" },
  { country: "French Southern Territories", flag: "🇹🇫" },
  { country: "Gabon", flag: "🇬🇦" },
  { country: "Gambia The", flag: "🇬🇲" },
  { country: "Georgia", flag: "🇬🇪" },
  { country: "Germany", flag: "🇩🇪" },
  { country: "Ghana", flag: "🇬🇭" },
  { country: "Gibraltar", flag: "🇬🇮" },
  { country: "Greece", flag: "🇬🇷" },
  { country: "Greenland", flag: "🇬🇱" },
  { country: "Grenada", flag: "🇬🇩" },
  { country: "Guadeloupe", flag: "🇬🇵" },
  { country: "Guam", flag: "🇬🇺" },
  { country: "Guatemala", flag: "🇬🇹" },
  { country: "Guernsey and Alderney", flag: "🇬🇬" },
  { country: "Guinea", flag: "🇬🇳" },
  { country: "Guinea-Bissau", flag: "🇬🇼" },
  { country: "Guyana", flag: "🇬🇾" },
  { country: "Haiti", flag: "🇭🇹" },
  { country: "Heard Island and McDonald Islands", flag: "🇭🇲" },
  { country: "Honduras", flag: "🇭🇳" },
  { country: "Hong Kong S.A.R.", flag: "🇭🇰" },
  { country: "Hungary", flag: "🇭🇺" },
  { country: "Iceland", flag: "🇮🇸" },
  { country: "India", flag: "🇮🇳" },
  { country: "Indonesia", flag: "🇮🇩" },
  { country: "Iran", flag: "🇮🇷" },
  { country: "Iraq", flag: "🇮🇶" },
  { country: "Ireland", flag: "🇮🇪" },
  { country: "Israel", flag: "🇮🇱" },
  { country: "Italy", flag: "🇮🇹" },
  { country: "Jamaica", flag: "🇯🇲" },
  { country: "Japan", flag: "🇯🇵" },
  { country: "Jersey", flag: "🇯🇪" },
  { country: "Jordan", flag: "🇯🇴" },
  { country: "Kazakhstan", flag: "🇰🇿" },
  { country: "Kenya", flag: "🇰🇪" },
  { country: "Kiribati", flag: "🇰🇮" },
  { country: "Kosovo", flag: "🇽🇰" },
  { country: "Kuwait", flag: "🇰🇼" },
  { country: "Kyrgyzstan", flag: "🇰🇬" },
  { country: "Laos", flag: "🇱🇦" },
  { country: "Latvia", flag: "🇱🇻" },
  { country: "Lebanon", flag: "🇱🇧" },
  { country: "Lesotho", flag: "🇱🇸" },
  { country: "Liberia", flag: "🇱🇷" },
  { country: "Libya", flag: "🇱🇾" },
  { country: "Liechtenstein", flag: "🇱🇮" },
  { country: "Lithuania", flag: "🇱🇹" },
  { country: "Luxembourg", flag: "🇱🇺" },
  { country: "Macau S.A.R.", flag: "🇲🇴" },
  { country: "Madagascar", flag: "🇲🇬" },
  { country: "Malawi", flag: "🇲🇼" },
  { country: "Malaysia", flag: "🇲🇾" },
  { country: "Maldives", flag: "🇲🇻" },
  { country: "Mali", flag: "🇲🇱" },
  { country: "Malta", flag: "🇲🇹" },
  { country: "Man (Isle of)", flag: "🇮🇲" },
  { country: "Marshall Islands", flag: "🇲🇭" },
  { country: "Martinique", flag: "🇲🇶" },
  { country: "Mauritania", flag: "🇲🇷" },
  { country: "Mauritius", flag: "🇲🇺" },
  { country: "Mayotte", flag: "🇾🇹" },
  { country: "Mexico", flag: "🇲🇽" },
  { country: "Micronesia", flag: "🇫🇲" },
  { country: "Moldova", flag: "🇲🇩" },
  { country: "Monaco", flag: "🇲🇨" },
  { country: "Mongolia", flag: "🇲🇳" },
  { country: "Montenegro", flag: "🇲🇪" },
  { country: "Montserrat", flag: "🇲🇸" },
  { country: "Morocco", flag: "🇲🇦" },
  { country: "Mozambique", flag: "🇲🇿" },
  { country: "Myanmar", flag: "🇲🇲" },
  { country: "Namibia", flag: "🇳🇦" },
  { country: "Nauru", flag: "🇳🇷" },
  { country: "Nepal", flag: "🇳🇵" },
  { country: "Netherlands", flag: "🇳🇱" },
  { country: "New Caledonia", flag: "🇳🇨" },
  { country: "New Zealand", flag: "🇳🇿" },
  { country: "Nicaragua", flag: "🇳🇮" },
  { country: "Niger", flag: "🇳🇪" },
  { country: "Nigeria", flag: "🇳🇬" },
  { country: "Niue", flag: "🇳🇺" },
  { country: "Norfolk Island", flag: "🇳🇫" },
  { country: "North Korea", flag: "🇰🇵" },
  { country: "North Macedonia", flag: "🇲🇰" },
  { country: "Northern Mariana Islands", flag: "🇲🇵" },
  { country: "Norway", flag: "🇳🇴" },
  { country: "Oman", flag: "🇴🇲" },
  { country: "Pakistan", flag: "🇵🇰" },
  { country: "Palau", flag: "🇵🇼" },
  { country: "Palestinian Territory Occupied", flag: "🇵🇸" },
  { country: "Panama", flag: "🇵🇦" },
  { country: "Papua New Guinea", flag: "🇵🇬" },
  { country: "Paraguay", flag: "🇵🇾" },
  { country: "Peru", flag: "🇵🇪" },
  { country: "Philippines", flag: "🇵🇭" },
  { country: "Pitcairn Island", flag: "🇵🇳" },
  { country: "Poland", flag: "🇵🇱" },
  { country: "Portugal", flag: "🇵🇹" },
  { country: "Puerto Rico", flag: "🇵🇷" },
  { country: "Qatar", flag: "🇶🇦" },
  { country: "Reunion", flag: "🇷🇪" },
  { country: "Romania", flag: "🇷🇴" },
  { country: "Russia", flag: "🇷🇺" },
  { country: "Rwanda", flag: "🇷🇼" },
  { country: "Saint Helena", flag: "🇸🇭" },
  { country: "Saint Kitts And Nevis", flag: "🇰🇳" },
  { country: "Saint Lucia", flag: "🇱🇨" },
  { country: "Saint Pierre and Miquelon", flag: "🇵🇲" },
  { country: "Saint Vincent And The Grenadines", flag: "🇻🇨" },
  { country: "Saint-Barthelemy", flag: "🇧🇱" },
  { country: "Saint-Martin (French part)", flag: "🇲🇫" },
  { country: "Samoa", flag: "🇼🇸" },
  { country: "San Marino", flag: "🇸🇲" },
  { country: "Sao Tome and Principe", flag: "🇸🇹" },
  { country: "Saudi Arabia", flag: "🇸🇦" },
  { country: "Senegal", flag: "🇸🇳" },
  { country: "Serbia", flag: "🇷🇸" },
  { country: "Seychelles", flag: "🇸🇨" },
  { country: "Sierra Leone", flag: "🇸🇱" },
  { country: "Singapore", flag: "🇸🇬" },
  { country: "Slovakia", flag: "🇸🇰" },
  { country: "Slovenia", flag: "🇸🇮" },
  { country: "Solomon Islands", flag: "🇸🇧" },
  { country: "Somalia", flag: "🇸🇴" },
  { country: "South Africa", flag: "🇿🇦" },
  { country: "South Georgia", flag: "🇬🇸" },
  { country: "South Korea", flag: "🇰🇷" },
  { country: "South Sudan", flag: "🇸🇸" },
  { country: "Spain", flag: "🇪🇸" },
  { country: "Sri Lanka", flag: "🇱🇰" },
  { country: "Sudan", flag: "🇸🇩" },
  { country: "Suriname", flag: "🇸🇷" },
  { country: "Svalbard and Jan Mayen Islands", flag: "🇸🇯" },
  { country: "Swaziland", flag: "🇸🇿" },
  { country: "Sweden", flag: "🇸🇪" },
  { country: "Switzerland", flag: "🇨🇭" },
  { country: "Syria", flag: "🇸🇾" },
  { country: "Taiwan", flag: "🇹🇼" },
  { country: "Tajikistan", flag: "🇹🇯" },
  { country: "Tanzania", flag: "🇹🇿" },
  { country: "Thailand", flag: "🇹🇭" },
  { country: "Togo", flag: "🇹🇬" },
  { country: "Tokelau", flag: "🇹🇰" },
  { country: "Tonga", flag: "🇹🇴" },
  { country: "Trinidad And Tobago", flag: "🇹🇹" },
  { country: "Tunisia", flag: "🇹🇳" },
  { country: "Turkey", flag: "🇹🇷" },
  { country: "Turkmenistan", flag: "🇹🇲" },
  { country: "Tuvalu", flag: "🇹🇻" },
  { country: "Uganda", flag: "🇺🇬" },
  { country: "Ukraine", flag: "🇺🇦" },
  { country: "United Arab Emirates", flag: "🇦🇪" },
  { country: "United Kingdom", flag: "🇬🇧" },
  { country: "United States", flag: "🇺🇸" },
  { country: "Uruguay", flag: "🇺🇾" },
  { country: "Uzbekistan", flag: "🇺🇿" },
  { country: "Vanuatu", flag: "🇻🇺" },
  { country: "Vatican City", flag: "🇻🇦" },
  { country: "Venezuela", flag: "🇻🇪" },
  { country: "Vietnam", flag: "🇻🇳" },
  { country: "Western Sahara", flag: "🇪🇭" },
  { country: "Yemen", flag: "🇾🇪" },
  { country: "Zambia", flag: "🇿🇲" },
  { country: "Zimbabwe", flag: "🇿🇼" },
];
// let countryChange;
function Form() {
  const [checkCountryChg, updateCountry] = useState(generateCountry());
  const [timerCount,updateTimerCount]=useState(0)
  // const [currOption,setCurrOption]=useState("")
  // console.log(checkCountryChg);
  function generateCountry() {
    let ind = Math.floor(Math.random() * country.length - 1);
    // console.log(ind);
    return country[ind];
  }
  const [currScore, updateScore] = useState(0);
  function handleClick(event) {
    // console.log("clicked");
    // console.log(inputValue)
    const val1 = event.target.textContent.toLowerCase();

    console.log("val1 :" + val1);
    const val2 = checkCountryChg.country.toLowerCase();
    console.log("val2: " + val2);
    if (val2 === val1) {
      console.log("correct");
      updateScore(currScore + 1);
      updateCountry(generateCountry());
    } else {
      console.log("wrong");
      alert(
        `Correct : ${checkCountryChg.country}, Your Total Score : ${currScore}`
      );
      location.reload();
    }
  }
  // const [inputValue, setInputVal] = useState("");
  // function handleChange(event) {
  //   const valHolder = event.target.value;
  //   setInputVal(valHolder);
  // }
  // function clearInput() {
  //   setInputVal("");
  // }
  
  function wrongOptionGenerator() {
    let ind = Math.floor(Math.random() * country.length - 1);
    // console.log(ind);
    return country[ind];
  }
  const buttons = ["", "", "", ""];
  let randomIndex = Math.floor(Math.random() * 4);
  console.log(randomIndex);
  let ctr=0;
  
  // setInterval(()=>{
  //   updateTimerCount(timerCount+1)
  // },1000)


  for (let i = 0; i < 4; i++) {
    if (i === randomIndex) {
      buttons[i] = (
        <button key={i} onClick={handleClick}>
          {checkCountryChg.country}
        </button>
      );
    } else {
      buttons[i] = (
        <button key={i} onClick={handleClick}>
          {wrongOptionGenerator().country}
        </button>
      );
    }
  }
  function handleSkip() {
    updateCountry(generateCountry());
  }
  return (
    <div className="form-div">
      {/* <Score /> */}
      {/* step1: Render the country:- */}
      <h1> {checkCountryChg.flag}</h1>
      {/* <h2>{timerCount}</h2> */}

      <div>
        <Score scoreUpdate={currScore} />
        {/* <input
          type="text"
          onChange={handleChange}
          value={inputValue}
          autoComplete="false"
          onFocus={clearInput}
        /> */}
        {/* <input type="submit" onClick={handleClick} />  */}

        {/* <button onClick={handleClick}>{checkCountryChg.country}</button>
        <button onClick={handleClick}>{wrongOptionGenerator().country}</button>
        <button onClick={handleClick}>{wrongOptionGenerator().country}</button>
        <button onClick={handleClick}>{wrongOptionGenerator().country}</button> */}

        {buttons.map((button) => {
          return button;
        })}
        <button className="skipBtn" onClick={handleSkip}>
          SKIP
        </button>
      </div>
    </div>
  );
}

export { Form };
