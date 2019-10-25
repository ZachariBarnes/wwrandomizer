# Werewolf Randomizer
This Repo has both a UI and API project. The API project works locally but is not currently deployed in a live environment. 
The User Interfact can be found on AWS S3<a href="https://ww-randomizer.s3.amazonaws.com/build/index.html?">here.</a>
This was developed in conjunction with the Modbot system we're building to moderate these games automatically. You can follow that project <a href="https://github.com/laurenmarieh/werewolfmod">here. </a>
The UI Allows users to Copy-paste lists of players and Roles and have them randomly assigned, It also have the ability to generate a given % of Bad Guy roles and will fill extra role slots with Plane Jane Villager(PJV) roles automatically.
The API has the same functionality and will return the data in JSON form or in an HTML table based on the `html` property in the body of the request. 
A API that allows Werewolf/Mafia moderators to randomize role assignment.

1. run `npm install` 
2. Start the server with `npm start`
3. Use postman or Insomnia to POST to the endpoint ```localhost:3000/```
4. Use a body that lists all your players and all your roles **EXCLUDING PJV (You may also exclude BG)**
* Example Body: 
    ```
    {
     "players":[
        "Austin",
        "Dodd",
        "Jeff Brantley",
        "Sell",
        "Olivia Brockman",
        "Michael Wags",
        "Katie Blackstone",
        "Christopher",
        "Audrey Lohse",
        "Stan Ponder",
        "Mahdi",
        "Justin Wash"
     	],
     "roles":[
        "Worf (GG in BG Chat)",
        "Commander Data (GG)",
        "Lore (BG)",
        "Doctor Crusher (Doc)",
        "Counselor Troi (Seer)",
        "Captain Picard (GG)",
        "Commander Riker (GG)",
        "Q (Chaos- Neutral)"
        "Geordi LaForge (GG Mason)",
        "Miles O'Brien (GG Mason)"
     	],
      "calcBgs": false,
      "bgRatio": 0.2,
	  "html":true
    }
    ```
5. You can include  the properties ``"calcBgs": true`` and ```"bgRatio": 0.2 ```in order to calcuate how many BGs there should be based on the number of players and the ratio (percentage) that should be Bad guys.

This application will automatically generate Roles for all players, creating PJV and BG roles as needed. It can return it to you in a table or JSON format. Examples below:
JSON:
[
    {
        "Player": "Matt Hecky,",
        "Role": "Lore (BG)"
    },
    {
        "Player": "Ian Madrigal,",
        "Role": "Counselor Troi (Seer)"
    },
    {
        "Player": "Austin,",
        "Role": "PJV"
    },
    {
        "Player": "Commander Cale,",
        "Role": "PJV"
    },
    {
        "Player": "Teeter,",
        "Role": "Q (Chaos- Neutral)"
    },
    {
        "Player": "Mahdi,",
        "Role": "PJV"
    },
    {
        "Player": "Olivia Brockman,",
        "Role": "PJV"
    },
    {
        "Player": "Brendan Daly,",
        "Role": "BG"
    },
    {
        "Player": "Michael Wags,",
        "Role": "BG"
    },
    {
        "Player": "Justin Wash,",
        "Role": "PJV"
    },
    {
        "Player": "Audrey Lohse,",
        "Role": "Commander Data (GG)"
    },
    {
        "Player": "Sam Whitaker,",
        "Role": "PJV"
    },
    {
        "Player": "B-Right,",
        "Role": "PJV"
    },
    {
        "Player": "Sell,",
        "Role": "PJV"
    },
    {
        "Player": "Tommy Pappas,",
        "Role": "Worf (GG in BG Chat)"
    },
    {
        "Player": "Taylor Mulholland,",
        "Role": "BG"
    },
    {
        "Player": "Dodd",
        "Role": "BG"
    },
    {
        "Player": "Jeff Brantley,",
        "Role": "Captain Picard (GG)"
    },
    {
        "Player": "Chard Durden",
        "Role": "PJV"
    },
    {
        "Player": "Brett Woodall,",
        "Role": "Doctor Crusher (Doc)"
    },
    {
        "Player": "Christopher,",
        "Role": "PJV"
    },
    {
        "Player": "Laurne,",
        "Role": "Commander Riker (GG)"
    },
    {
        "Player": "Matty K,",
        "Role": "PJV"
    },
    {
        "Player": "Stan Ponder,",
        "Role": "BG"
    },
    {
        "Player": "Katie Blackstone,",
        "Role": "PJV"
    }
]

HMTL:
<table>
	<tr>
		<th>Player</th>
		<th>Role</th>
	</tr>
	<tr>
		<td>Christopher,</td>
		<td>Lore (BG)</td>
	</tr>
	<tr>
		<td>Jeff Brantley,</td>
		<td>PJV</td>
	</tr>
	<tr>
		<td>Brendan Daly,</td>
		<td>PJV</td>
	</tr>
	<tr>
		<td>Sam Whitaker,</td>
		<td>PJV</td>
	</tr>
	<tr>
		<td>Sell,</td>
		<td>Counselor Troi (Seer)</td>
	</tr>
	<tr>
		<td>Matt Hecky,</td>
		<td>Commander Riker (GG)</td>
	</tr>
	<tr>
		<td>Dodd</td>
		<td>PJV</td>
	</tr>
	<tr>
		<td>Commander Cale,</td>
		<td>BG</td>
	</tr>
	<tr>
		<td>Olivia Brockman,</td>
		<td>BG</td>
	</tr>
	<tr>
		<td>Mahdi,</td>
		<td>PJV</td>
	</tr>
	<tr>
		<td>Austin,</td>
		<td>BG</td>
	</tr>
	<tr>
		<td>Taylor Mulholland,</td>
		<td>Commander Data (GG)</td>
	</tr>
	<tr>
		<td>Tommy Pappas,</td>
		<td>BG</td>
	</tr>
	<tr>
		<td>Katie Blackstone,</td>
		<td>PJV</td>
	</tr>
	<tr>
		<td>B-Right,</td>
		<td>BG</td>
	</tr>
	<tr>
		<td>Audrey Lohse,</td>
		<td>PJV</td>
	</tr>
	<tr>
		<td>Matty K,</td>
		<td>PJV</td>
	</tr>
	<tr>
		<td>Teeter,</td>
		<td>PJV</td>
	</tr>
	<tr>
		<td>Chard Durden</td>
		<td>PJV</td>
	</tr>
	<tr>
		<td>Laurne,</td>
		<td>Worf (GG in BG Chat)</td>
	</tr>
	<tr>
		<td>Ian Madrigal,</td>
		<td>Q (Chaos- Neutral)</td>
	</tr>
	<tr>
		<td>Stan Ponder,</td>
		<td>PJV</td>
	</tr>
	<tr>
		<td>Justin Wash,</td>
		<td>PJV</td>
	</tr>
	<tr>
		<td>Brett Woodall,</td>
		<td>Captain Picard (GG)</td>
	</tr>
	<tr>
		<td>Michael Wags,</td>
		<td>Doctor Crusher (Doc)</td>
	</tr>
</table>