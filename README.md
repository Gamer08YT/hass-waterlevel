# Tank Level Card / Cistern Card by [@Gamer08YT](https://www.github.com/Gamer08YT)

A simple card which displays energy usage details of one or multiple entities.

[![hacs_badge](https://img.shields.io/badge/HACS-Default-41BDF5.svg?style=for-the-badge)](https://my.home-assistant.io/redirect/hacs_repository/?owner=Gamer08YT&repository=hass-waterlevel&category=frontend)
[![GitHub Release][releases-shield]][releases]
![GitHub Downloads][downloads-shield]

[![License][license-shield]](LICENSE)
![Project Maintenance][maintenance-shield]
[![GitHub Activity][commits-shield]][commits]

## Configuration

A graphical user interface (GUI) to configure the card is currently not available.

After installation, simply press "Add Card", search for "Tank Level Card", and add the card.

## Options

| Name   | Type   | Requirement  | Description                         | Default |
|--------|--------|--------------|-------------------------------------|---------|
| type   | string | **Required** | `custom:hass-waterlevel-card`       |         |
| entity | Entity | **Required** | Entity wich stores the Level State. |         |
| volume | Number | **Required** | Max Volume of your Tank.            | 1000    |

### Example configuration

```yaml
type: custom:hass-waterlevel-card
entity: sensor.füllstand
volume: 1000
```

## Install

### HACS

*This repo is available for install through the HACS.*

* Go to HACS → Frontend
* Use the FAB "Explore and download repositories" to search "Tank Level Card".

_or_

Click here:

[![](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=Gamer08YT&repository=hass-waterlevel&category=frontend)


[commits-shield]: https://img.shields.io/github/commit-activity/y/Sese-Schneider/ha-energy-overview-card.svg?style=for-the-badge

[downloads-shield]: https://img.shields.io/github/downloads/Sese-Schneider/ha-energy-overview-card/total.svg?style=for-the-badge

[commits]: https://github.com/Sese-Schneider/ha-energy-overview-card/commits/main

[license-shield]: https://img.shields.io/github/license/Sese-Schneider/ha-energy-overview-card.svg?style=for-the-badge

[maintenance-shield]: https://img.shields.io/maintenance/yes/2023.svg?style=for-the-badge

[releases-shield]: https://img.shields.io/github/release/Sese-Schneider/ha-energy-overview-card.svg?style=for-the-badge

[releases]: https://github.com/Sese-Schneider/ha-energy-overview-card/releases