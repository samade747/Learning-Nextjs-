export default function ReviewDetail( { 
    params,
}:{
    params: {
        productId: string
        reviewsId: string
    }
}) {
    return (
        <div>
            <h1>
            Review {params.reviewsId} for product  {params.productId}              
            </h1>
       </div>
    );
}