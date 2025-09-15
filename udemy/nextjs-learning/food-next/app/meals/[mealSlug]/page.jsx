export default function Meal({params}){
    return(
        <div>
            this is the selected meal page
           <p>
                {params.mealSlug}
            </p> 
        </div>
    )   
}