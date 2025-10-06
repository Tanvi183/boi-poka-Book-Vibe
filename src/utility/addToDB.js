const addToStoredDB = (id) => {
    // console.log(id);
    
  // Step 1: Get existing data from localStorage
  const existingData = localStorage.getItem("readList");

  // Step 2: Parse existing data or initialize empty array
  let storedBookData = existingData ? JSON.parse(existingData) : [];

   // Step 3: Add new item if not already in list (optional)
   if (!storedBookData.includes(id)) {
    storedBookData.push(id);
   }else{
    alert("This Book You already Read");
   }

   // Step 4: Save updated array back to localStorage
   localStorage.setItem("readList", JSON.stringify(storedBookData));
};



export { addToStoredDB };