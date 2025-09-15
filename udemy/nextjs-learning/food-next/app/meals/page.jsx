import Link from "next/link";

export default function MealsPage(){
    return (
        <>
            <div>
                <h1> this is where all the meals are kept </h1>
                <p> 
                    <Link href = "/meals/meal-1" style={{ color: 'white', textAlign: 'center' }} >meal -1 </Link>
                </p>
                <p> 
                    <Link href = "/meals/meal-2" style={{ color: 'white', textAlign: 'center' }} >meal -2 </Link>
                </p>  
            </div>
            <div>
                <p>
                    <Link href="/meals/share" style={{ color: 'white', textAlign: 'center' }} >share</Link>
                </p>
            </div>
        </>
    )
}