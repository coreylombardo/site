import type { Route } from "./+types/projects";
import Nt from "../components/nt";

export function meta({}: Route.MetaArgs) {
    return [
        { title: "Projects" },
        { name: "description", content: "Welcome to React Router!" },
    ];
}

export default function Projects() {
    return (
        <div className="projectslist">
            <ul>
                <li><Nt to="https://github.com/coreylombardo/site">This website!</Nt></li>
                Built with React Router 8 and 0% vibes.
                <li><Nt to="https://github.com/coreylombardo/opyftw">opyftw (currently unfinished)</Nt></li>
                A Python recreation of osu!ftw, a replay metadata editor for osu!, made with <Nt to="https://github.com/kszlim/osu-replay-parser">kszlim's osrparse library</Nt>. May contain vibes.
                <br/><br/>
                There were previously some half-baked l10n projects here, but that's a dead profession thanks to LLMs. Обязательно свяжитесь со мной если ваше ПО нуждается в любительской локализации на английский!
            </ul>
        </div>
    );
}