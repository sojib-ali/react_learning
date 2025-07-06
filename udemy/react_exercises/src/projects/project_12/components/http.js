const BASE_URL = "http://localhost:3000"; 

export async function fetchAvailablePlaces() {
    const response = await fetch(`${BASE_URL}/places`);

    if (!response.ok) {
        const text = await response.text(); // Optional debug
        console.error("Error response:", text);
        throw new Error("Failed to fetch places");
    }

    const resData = await response.json();
    return resData.places;
}

export async function updateUserPlaces(places) {
    const response = await fetch(`${BASE_URL}/user-places`, {
        method: 'PUT',
        body: JSON.stringify({ places }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (!response.ok) {
        const text = await response.text(); // Optional debug
        console.error("Error updating places:", text);
        throw new Error("Failed to update user data");
    }

    const resData = await response.json();
    return resData.message;
}
