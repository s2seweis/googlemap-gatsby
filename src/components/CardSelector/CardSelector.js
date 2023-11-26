import React, { useState, lazy, Suspense } from 'react';
import styled from 'styled-components';

const StyledComponent = styled.div`
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px;
  width: auto;
  min-width: 350px;
  display: contents;
  text-align: center;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const ComponentSelectorContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
`;

const ComponentSelectorTitle = styled.h1`
  color: #333;
`;

const ComponentSelectorLabel = styled.label`
  margin-top: 20px;
  display: block;
  font-size: 16px;
  color: #333;
`;

const CustomSelectContainer = styled.div`
  position: relative;
  margin-top: 8px;
`;

const CustomSelect = styled.div`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
`;

const CustomOptions = styled.div`
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border: 1px solid #ccc;
  border-top: none;
  border-radius: 0 0 4px 4px;
  background-color: #fff;
`;

const CustomOption = styled.div`
  padding: 8px;
  cursor: pointer;
  &:hover {
    background-color: #f0f0f0;
  }
`;

const ComponentSelectorSelect = styled.select`
  display: none; /* hide the default select on mobile */
`;

const ComponentSelector = () => {
  const [selectedComponent, setSelectedComponent] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState('');

  // Event handler for select change
  const handleSelectChange = async (value) => {
    try {
      let component;

      switch (value) {
        case 'kml':
          component = await import('../Maps/KmlComponent');
          break;
        case 'markers':
          component = await import('../Maps/ButtonsBoxes/MarkersButtonsComponent');
          break;
        case 'infobox':
          component = await import('../Maps/ButtonsBoxes/InfoboxComponent');
          break;
        case 'clustering-v1':
          component = await import('../Maps/Clustering/ClusteringComponentV1/ClusteringComponentV1');
          break;
        case 'clustering-v2':
          component = await import('../Maps/Clustering/ClusteringComponentV2/ClusteringComponentV2');
          break;
        case 'clustering-v3':
          component = await import('../Maps/Clustering/ClusteringComponentV3');
          break;
        case 'current-v1':
          component = await import('../Maps/CurrentLocation/CurrentLocationComponentV1');
          break;
        case 'current-v2':
          component = await import('../Maps/CurrentLocation/CurrentLocationComponentV2');
          break;
        case 'auto-complete':
          component = await import('../Maps/AutoCompleteComponent');
          break;
        default:
          component = null;
          break;
      }

      setSelectedValue(value);
      setSelectedComponent(component);
      setIsOpen(false);
    } catch (error) {
      console.error('Error loading component:', error);
    }
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <ComponentSelectorContainer>
      <ComponentSelectorTitle>Select a Card</ComponentSelectorTitle>

      {/* Custom dropdown for mobile */}
      <CustomSelectContainer style={{background:"#fafafa"}}>
        <CustomSelect onClick={toggleDropdown}>
          {selectedValue ? `Selected: ${selectedValue}` : 'Select a component'}
        </CustomSelect>
        <CustomOptions style={{zIndex:"5"}} isOpen={isOpen}>
          <CustomOption onClick={() => handleSelectChange('kml')}>KML</CustomOption>
          <CustomOption onClick={() => handleSelectChange('markers')}>Markers & Buttons</CustomOption>
          <CustomOption onClick={() => handleSelectChange('infobox')}>Infobox</CustomOption>
          <CustomOption onClick={() => handleSelectChange('clustering-v1')}>Clustering-V1</CustomOption>
          <CustomOption onClick={() => handleSelectChange('clustering-v2')}>Clustering-V2</CustomOption>
          <CustomOption onClick={() => handleSelectChange('clustering-v3')}>Clustering-V3</CustomOption>
          <CustomOption onClick={() => handleSelectChange('current-v1')}>Current-V1</CustomOption>
          <CustomOption onClick={() => handleSelectChange('current-v2')}>Current-V2</CustomOption>
          <CustomOption onClick={() => handleSelectChange('auto-complete')}>Auto Complete/SearchBox</CustomOption>
        </CustomOptions>
      </CustomSelectContainer>

      {/* Render selected component */}
      {selectedComponent && (
        <div style={{ marginTop: '20px' }}>
          {/* <h2>Selected Component:</h2> */}
          <Suspense fallback={<div>Loading...</div>}>
            {typeof selectedComponent === 'function' ? (
              selectedComponent()
            ) : (
              <StyledComponent>{React.createElement(selectedComponent.default)}</StyledComponent>
            )}
          </Suspense>
        </div>
      )}
    </ComponentSelectorContainer>
  );
};

export default ComponentSelector;
