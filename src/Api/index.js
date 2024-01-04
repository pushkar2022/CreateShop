export const handleLoginRequest = async (postData) => {

    try {
      const response = await fetch('http://localhost:5000/auth/login', {
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

  export const handleRegisterRequest = async (postData) => {
   
    try {
      const response = await fetch('http://localhost:5000/auth/resgiter', {
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