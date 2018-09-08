# Amharc (or whatever I end up calling this thing)

## What is this

Amharc is a proejct that is part of a larger collection of tools that
aims to provide communities the ability to collect data, analyise information and
effectively use this knowledge to advocate for change.


## What can I do with it.

This app allows users to define community projects to which voluenteers can be invited.
Each project consists of an overall goal which aims to focus the communities efforts. Voluenteers
help collect data. This can be by multiple different modes:

1) On the ground data collection where a voluenteer goes out in to the world to collect
data about physical assets, the opinions of people in a space or a combination of both
2) Surveys that can be sent out to multiple participants for their reaction.

Either way the organisation of the data is the same. Each project can have multiple
campaigns. Each campaign is broken down in to Observations which are
discrete meaningful observations of the world.

Each Observation is composed on Fragments, a Fragment is a single typed entry of data

## Projects

A project is a purposful organisation. It has a specific goal and can be potentially
scoped to a specific geographic region and time range.

It defines multiple campaigns which are subgoals of the main goal and define at least
one Observation Template.

### Sample project

Aim: Resist gentrification in a fast gentrifying area.
Geographic Region: The neighborhood in question

## Campaign

Campaigns are specific tactics that should result in data that supports the aims of the project


### Sample Campaign

Goal: Collect data on where residents are being targeted for buy outs in the neighborhood and
understand the companies targeting them.

It has many contributors who provide Observations by interacting with Observation Teplates.

## Observation Template
An Observation Template is a discrete set of data that aims to provide insight to the Goal
of the Campaign. It is built up of Fragment Templates.

Observation Templates can be shared between projects, they can be versioned or forked and
they retain a record of their lienage.

### Sample Observation Template

Description: Information about targeted homes.
Collectors Instructions: Wonder arround the neighborhood and nock on doors. Ask the residents
if they have been called by a estate agent who has offered them money to sell up.

Fragment Templates:
  - Address Fragment (required): Enter the address of the house
  - Occupants Name (optional): The name of the person you are talking to
  - Ammount offered (optional): How much where they offered.
  - Photograph of the property (optional):
  - Are they likley to accept: Boolean Yes or No

Each observation produces a unique ID. The person being surveyed and the collector have
acces to this id which the suerveyed person can access at any time to change the data,
request that it be anonomised or removed.

## Target Template

Describes a list of different target for data collection that could be either addresses,
locations, websites to check etcetera

### Example Target Template

targetType: 'Physical Address'
targetName: '421 pulaski street, broolkyn ny'
lat: '-75.44'
lng: '45'

## Fragment Template
A Fragment template is a request for a single pice of information that contributes to
an Observation

### Fragment Template examples :

- The text based answer to a speciic question
- An option selected from multiple choices
- A location entered by address or GPS
- A time range
- A photograph of a specific object

## Observation

Consists of the data collceted by that observation. Has a created\_at timestamps and
is tagged to the person who entered it.

It is tagged to a specific version of an Observation. Data may be combined between
different versions or forks of a Observation Template


Amharc - observation
Eolas  - Knowledge

