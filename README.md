# MÁV-Delay
## Serverside app that displays daily statistics about the Hungarian National Railway (MÁV)

Created by: Marci Jakab // JaksyMarci

Visit the live website [here](https://data-centaur-395912.ey.r.appspot.com/)

//Under development//

TODO:

* A non-stupid way to store the daily statistics, e.g. a proper database. As of now, if the image gets cold booted, the data may be deleted. To prevent this, manual scaling is used, which is bad.
    * Additionally, instead of scheduling the API request within the server process, maybe setting a cron job would be more efficient.
* Some kind of frontend would be nice
* Additional statistics (train with most delay/day, largest collective delay within month, etc.)

Open to contributions, feel free to submit a pull request if you love MÁV as well.
