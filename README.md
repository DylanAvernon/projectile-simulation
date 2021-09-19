# projectile-simulation
## Description:
This is a simple simulation that allows the user to create an arbitrary number of balls,
start the simulation, and stop the simulation.

When the simulation is started, all the balls will bounce around the container until
the user refreshes the page or clicks the stop simulation button.

## Usage:
The create balls button will prompt the user to enter the number of balls they wish
to create. That number of balls will then appear randomly throughout the container.

The start simulation button calls a move function on each ball and sets an interval on that
ball. If you click the start simulation button multiple times, the balls will accelerate
each time the button is clicked.

The stop simulation button removes all intervals from the balls and freezes them at their
current location.

## Support:
If anything goes wrong or the simulation is slowing down your browser, just refresh the
page or click the stop simulation button. Both solutions will remove all the intervals.

## Roadmap:
I would like to include a remove all balls button that allows the user to clear the
container of all the balls and start from a clean slate.
