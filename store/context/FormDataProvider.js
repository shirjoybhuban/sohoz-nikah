import axios from 'axios';
import React, { createContext, useContext, useState } from 'react';

// Create the context
const FormDataContext = createContext();

// Create a provider component
export const FormDataProvider = ({ children }) => {
  const [tabIndex, setTabIndex] = useState(0);
  const [formData, setFormData] = useState({
    primaryInformation: null,
    generalInformation: null,
    personalInformation: null,
    bridalInformation: null,
    address: null,
    education: null,
    family: null,
    religion: null,
    marital: null,
    query: null,
  });

  // Function to update formData dynamically
  const updateFormData = (key, value) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };
  const handleFormSubmission = async (key, value) => {
    console.log('formData', formData);

    try {
      const response = await axios.post('/api/createBiodata', formData);
      // setResponseMessage(response.data.message);
    } catch (error) {
      // setResponseMessage(
      //   error.response?.data?.error || 'An error occurred. Please try again.'
      // );
    }
  };
  return (
    <FormDataContext.Provider
      value={{
        formData,
        updateFormData,
        tabIndex,
        setTabIndex,
        handleFormSubmission,
      }}
    >
      {children}
    </FormDataContext.Provider>
  );
};

// Custom hook to use the context
export const useFormData = () => {
  const context = useContext(FormDataContext);
  if (!context) {
    throw new Error('useFormData must be used within a FormDataProvider');
  }
  return context;
};
