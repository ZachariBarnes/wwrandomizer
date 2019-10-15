# Werewolf Randomizer
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
      "bgRatio": 0.2
    }
    ```
5. You can include  the properties ``"calcBgs": true`` and ```"bgRatio": 0.2 ```in order to calcuate how many BGs there should be based on the number of players and the ratio (percentage) that should be Bad guys.

This application will automatically generate Roles for all players, creating PJV and BG roles as needed. It will return it to you iin a table format like so:

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