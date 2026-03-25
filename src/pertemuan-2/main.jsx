import { createRoot } from "react-dom/client";
import Biodata from "./Biodata";
import Container from "./Container";
import './custom.css';

createRoot(document.getElementById("root"))
    .render(
        <div>
            <Container>
                <Biodata/>
            </Container>
        </div>
    )

    