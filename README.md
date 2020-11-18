## Available Scripts

In the project directory, you can run:

### `npm install`

Instals all the required dependencies to run the application.

### `npm start`

Runs the application
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\




## Problem and Solution:

DropDown is a generic component that can be used by parent to use dropdown feature. In the example I have used dropdown for showing `Countries and Cities`.
```
<DropDown 
  label={isEmpty(selectedCountry) ? "Select Location": selectedCountry }
  options={countries}
  onOptionChange={this.onCountryChange}
  maximumDisplayOptions={5}
  addNewOption={this.addNewOption}
  canCreateOption={true
/>
```

`label` -> Label to be shown on the dropdown

`options` -> List of dropdown options available

`onOptionChange` -> Callback function when user selects a dropdown option

`maximumDisplayOptions` -> Maximum number of items visible in the dropdown menu

`addNewOption` -> Callback function when user creates/adds a new dropdown option

`canCreateOption` -> This is flag to give permission for a user to Create/Add new option. 

                     If this is `True` then user will be able to create/add a new option.
                     If this is `False` then user will not be able to create/add a new option.
