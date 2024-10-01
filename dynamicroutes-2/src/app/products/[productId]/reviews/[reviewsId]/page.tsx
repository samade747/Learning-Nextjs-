export default function ReviewDetail({
    params,
}:{
    params: {
        productId: string,
        reviewsId: string
   };    
}) {
    return (
        <div>
            Review {params.reviewsId } for product {params.productId }
        </div>
    );

}
