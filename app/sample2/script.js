function calculateRate() {
    const pickupPincode = document.getElementById('pickupPincode').value;
    const deliveryPincode = document.getElementById('deliveryPincode').value;
    const parcelWeight = document.getElementById('parcelWeight').value;
    const parcelLength = document.getElementById('parcelLength').value;
    const parcelWidth = document.getElementById('parcelWidth').value;
    const parcelHeight = document.getElementById('parcelHeight').value;

    // Basic validation
    if (!pickupPincode || !deliveryPincode || !parcelWeight || !parcelLength || !parcelWidth || !parcelHeight) {
        alert('Please fill all the fields.');
        return;
    }

    // Simple rate calculation logic (you can replace this with your own logic)
    const rate = (parseFloat(parcelWeight) + parseFloat(parcelLength) + parseFloat(parcelWidth) + parseFloat(parcelHeight)) * 0.1;

    // Display the rate
    document.getElementById('shippingRate').innerText = `Shipping Rate: ₹${rate.toFixed(2)}`;
}


document.getElementById('pickupPincode').addEventListener('input',function(){
    fetchPincodeData(this.value,'pickup');
});

let fetchPincodeData = async(pincode,type)=>{
    await fetch('deliveryPin.json')
           
    .then(Response => Response.json())
    .then(data =>{
        const location= data[pincode];
        if(location){
            if(type=='pickup'){
                console.log(`pickup Location:${location}`)
            }
            else{
                console.log('pincode not found');
            }
        }
    }).catch("error");
}