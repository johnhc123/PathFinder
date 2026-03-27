function Dropdown({title, trail1, trail2, trail3, trail4}) {
  return <div>
    <h1>{title}</h1>
    <select>
<option value="opt1">{trail1}</option>
<option value="opt2">{trail2}</option>
<option value="opt3">{trail3}</option>
<option value="opt4">{trail4}</option>

</select>

   </div>;
}

export default Dropdown;
