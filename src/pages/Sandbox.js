import React, {useState} from 'react';
import Select from 'react-select';

const Sandbox = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
    console.log(`Option selected:`, selectedOption);
  };

  return (
    <div className="container">
      <h1>Sandbox</h1>
      <p>Здесь будет песочница компонентов</p>
      <h2>React Select</h2>
      <Select
        value={selectedOption}
        onChange={handleChange}
        options={options}
      />
    </div>
  );
};


export default Sandbox;
