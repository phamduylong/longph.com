/** @type {import('./$types').PageServerLoad} */
import { PEEKA_API_KEY } from "$env/static/private";
export const trailingSlash = 'always';
export async function load({ data, fetch }) {
    const preview_urls = [
                            "https://random-netflix-quotes.vercel.app/", 
                            "https://shopping-list-phamduylong.vercel.app/",
                            "https://replit.com/@PhamLong1/FootballRecord?v=1",
                            "https://phamduylong.github.io/rockpaperscissors/"                        
], preview_response = []
    for (let i = 0; i < preview_urls.length; ++i) {
        const fetch_res = await fetch("https://api.peekalink.io/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-API-Key": PEEKA_API_KEY
            },
            body: 
                JSON.stringify({"link": preview_urls[i]})
            

        });
        console.log("\n\n\n\n\nFETCH RES:", fetch_res);
        const res_json = await fetch_res.json();
        preview_response.push(res_json);
    }

    return {server_data: preview_response};
}
