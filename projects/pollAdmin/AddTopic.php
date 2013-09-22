<?php
	
class AddTopic
{
	//Instance variables
	private $newTopic;
	private $newQuestion;
	private $choice1;
	private $choice2;
	private $choice3;
	private $choice4;
	private $noDuplicates = true;
	private $questionID;
	
	public function __construct()
	{
		//Constructor
		if($_SESSION['login'])
		{
			$this->newTopic = $_GET['newtopic'];
			$this->newQuestion = $_GET['newquestion'];
			$this->choice1 = $_GET['choice1'];
			$this->choice2 = $_GET['choice2'];
			$this->choice3 = $_GET['choice3'];
			$this->choice4 = $_GET['choice4'];
		}
	}
	public function addToDatabase()
	{
		//Connect to the database
		include('../../db.php');
		$sql = "SELECT `category` FROM `topics`";
		if ($result = $mysqli->query($sql)) 
		{
			if ($result->num_rows > 0)
			{
				while ($row = $result->fetch_object())
				{
					$topicsArray[] = $row->category;
				}
			}
		}
		else
		{
			echo "there was an error from MySQL: " . $mysqli->error;
		}
		
		//Make sure the user isn't giving us something we already have
		foreach($topicsArray as $topic)
		{
			if($this->newTopic == $topic)
			{
				echo "false";
				$this->noDuplicates = false;
			}
		}
		
		//Topic isn't a duplicate
		if($this->noDuplicates)
		{
			//Topic, question, and at least 2 choices are set
			if($this->newTopic != "" && $this->newQuestion != "" && $this->choice1 != "" && $this->choice2 != "")
			{
				//Insert Topic
				$sql = "INSERT INTO `topics` VALUES ('', '" . $this->newTopic . "');";
				$mysqli->query($sql);
				
				//Insert Question
				$sql = "INSERT INTO `questions` VALUES ('', '" . $this->newTopic . "','" . $this->newQuestion . "');";
				$mysqli->query($sql);
				
				//Find new qustion ID
				$sql = "SELECT `ID` FROM `questions` WHERE `category` = '" . $this->newTopic . "'";
				if ($result = $mysqli->query($sql)) 
				{
					if ($result->num_rows > 0)
					{
						while ($row = $result->fetch_object())
						{
							$this->questionID = $row->ID;
						}
					}
				}
				
				//Insert Choices
				$sql = "INSERT INTO `choices` VALUES (NULL, '" . $this->questionID . "','" . $this->choice1 . "', '0'),
				(NULL, '" . $this->questionID . "','" . $this->choice2 . "', '0');";
				$mysqli->query($sql);
				
				if($this->choice3 != "")
				{
					$sql = "INSERT INTO `choices` VALUES (NULL, '" . $this->questionID . "','" . $this->choice3 . "', '0');";
					$mysqli->query($sql);
				}
				if($this->choice4 != "")
				{
					$sql = "INSERT INTO `choices` VALUES (NULL, '" . $this->questionID . "','" . $this->choice4 . "', '0');";
					$mysqli->query($sql);
				}
				echo "true";
			}
			else
			{
				echo "false";
			}
		}
		else
		{
		 	echo "false";
		}
		
		$mysqli->close();
	}
}
?>