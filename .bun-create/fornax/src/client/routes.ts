import { addRouter } from "fornaxjs";
import { HelloWorld } from "./components/hello-world.component";

export const routes: any[] = [{ path: "/", component: HelloWorld }];

addRouter("router-outlet", routes);
