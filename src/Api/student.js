export const handlegetRequest = async (postData) => {
   
        try {
          const response = await fetch('http://localhost:5000/user/', {
           
            headers: {
              'Content-Type': 'application/json',
             
            },
           
          });
    
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
    
          const {data} = await response.json();
          console.log('POST request successful. Response:', data);
          return data;
        } catch (error) {
          console.error('Error during POST request:', error.message);
        }
      };
    
      export const handledeleteRequest = async (id) => {
   
        try {
          const response = await fetch(`http://localhost:5000/user/${id}`, {
           method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
             
            },
           
          });
    
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
    
          const {data} = await response.json();
          console.log('POST request successful. Response:', data);
        
          return data;
        } catch (error) {
          console.error('Error during POST request:', error.message);
        }
      };

      export const handleSaveRequest = async (postData) => {
      
        try {
          const response = await fetch('http://localhost:5000/user/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
             
            },
            body: JSON.stringify(postData),
          });
    
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
    
          const data = await response.json();
          console.log('POST request successful. Response:', data);
        } catch (error) {
          console.error('Error during POST request:', error.message);
        }
      };

      export const handleUpdateRequest = async ({id,...postData}) => {
      
        try {
          const response = await fetch(`http://localhost:5000/user/${id}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
             
            },
            body: JSON.stringify(postData),
          });
    
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
    
          const data = await response.json();
          console.log('POST request successful. Response:', data);
        } catch (error) {
          console.error('Error during POST request:', error.message);
        }
      };