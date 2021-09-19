import { NavigationBar } from './navigationbar.js';
import { Container } from './container.js';
class Simulation {
    constructor(structure) {
        this.buttons = structure.buttons;

        // Create project div
        this.element = document.createElement('div');
        this.element.id = structure.id;
        this.element.className = 'project';

        // Create project header
        this.header2 = document.createElement('h2');
        this.header2.id = `${this.element.id}-header2`;
        this.header2.className = 'project-header';
        this.header2.textContent = structure.title;
        this.element.appendChild(this.header2);

        // Create navigation bar
        this.navigationBar = new NavigationBar(this.element.id, this.buttons);
        this.element.appendChild(this.navigationBar.element);

        // Create container
        this.container = new Container(this.element.id, 500, 500);
        this.element.appendChild(this.container.element);
    }
}
export { Simulation };