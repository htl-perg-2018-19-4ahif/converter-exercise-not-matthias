# Converter

Simple unit converter. Can be used with the `smartcar-unit` library or with the `WolframAlpha API` via REST.

## Commands

- `npm run rest <number> <unit> to <new_unit>`
- `npm start <number> <unit> to <new_unit>`
- `npm test`
- `npm help`

> NOTE: `npm start` uses the smartcar-unit library and `npm run rest` uses the WolframAlpha API


## Usage

- `node convert.js 5 m to cm`
- `node convert.js 10 g to kg`


## Supported Units

### smartcar-unit

| Distance | aliases |
|----------|---------|
| inch | `in` `inch` `inches`|
| foot | `ft` `foot` `feet` |
| mile | `mi` `mile` `miles` |
| meter | `m` `meter` `meters` `metre` `metres` |
| kilometer | `km` `kilometer` `kilometers` |

| Pressure | aliases |
|----------|---------|
| pounds per square inch| `psi` `psis` |
| pascal | `pa` `pascal` `pascals` |
| bar | `bar` `bars` |
| millibar | `mbar` `millibar` `mbars` `millibars` `hectopascal` `hectopascals` |
| millimeter of mercury | `mmhg` `torr` |
| atmospheric | `atmosphere` `atmospheres` `atmospheric` `barometric` |
| kilopascal | `kpa` `kpas` `kilopascal` `kilopascals` |

| Temperature | aliases |
| ----------- | ------- |
| kelvin | `k` `kelvin` `kelvins` |
| fahrenheit | `f` `fahrenheit` |
| celsius | `c` `celsius` `centigrade` |

| Mass | aliases |
| ---- | ------- |
| ounce | `oz` `ounce` `ounces` |
| pound | `lb` `lbs` `pound` `pounds` |
| gram | `g` `gm` `gram` `grams` |
| kilogram | `kg` `kilogram` `kilograms` |

| Volume | aliases |
| ------ | ------- |
| milliliter  | `ml` `milliliter` `milliliters` `millilitre` `millilitres`|
| liter  | `l` `liter` `liters` `litre` `litres`|
| us gallon | `usgal` `usgallon` `usgallons` |
| imperial gallon | `gal` `gallon` `gallons` |

### WolframAlpha

Almost every existing data type. 