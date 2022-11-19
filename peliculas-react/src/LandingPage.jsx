import { MoviesGrid } from "./MoviesGrid";
import { Search } from "./Search";

export function LandingPage() {
    return (
        <div>
            <Search />
            <MoviesGrid />
        </div>
    );
}