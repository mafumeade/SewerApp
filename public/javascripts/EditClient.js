import { $, $$ } from "./modules/Bling";
import modalSetup from "./modules/toggleModal";

const model = $(".modal");
const openBtn = $(".deleteBtn");
modalSetup(model, openBtn);
