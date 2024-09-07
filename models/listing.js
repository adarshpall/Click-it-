const mongoose =require ("mongoose");
const Schema =mongoose.Schema;

const listingSchema=new Schema({
    title:{
        type: String,
        required:true,
    },
    description : String,
    image :{
        type :String,
        default:"https://in.images.search.yahoo.com/search/images;_ylt=AwrKEatXCtxmLAQAqQ.7HAx.;_ylu=Y29sbwNzZzMEcG9zAzEEdnRpZAMEc2VjA3BpdnM-?p=hotel+pics&fr2=piv-web&type=E210IN885G0&fr=mcafee#id=0&iurl=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F1134176%2Fpexels-photo-1134176.jpeg%3Fcs%3Dsrgb%26dl%3Ddug-out-pool-hotel-pool-1134176.jpg%26fm%3Djpg&action=click",
        set: (v)=>
            v===""?"https://in.images.search.yahoo.com/search/images;_ylt=AwrKEatXCtxmLAQAqQ.7HAx.;_ylu=Y29sbwNzZzMEcG9zAzEEdnRpZAMEc2VjA3BpdnM-?p=hotel+pics&fr2=piv-web&type=E210IN885G0&fr=mcafee#id=0&iurl=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F1134176%2Fpexels-photo-1134176.jpeg%3Fcs%3Dsrgb%26dl%3Ddug-out-pool-hotel-pool-1134176.jpg%26fm%3Djpg&action=click":v,
    },
    price: Number,
    location:String,
    state:String,
    
});
const Listing =mongoose.model("Listing",listingSchema);
module.exports=Listing;