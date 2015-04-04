<?php
	class DBI {
		private $HOST = "";
		private $PORT = 5432;
		private $DBNAME = "";
		private $USERNAME = "";
		private $PASSWORD = "";

		private $dbh = null;
		private $sth = null;

		public function connect() {
			$this->dbh = pg_connect("host=$this->HOST port=$this->PORT dbname=$this->DBNAME user=$this->USERNAME password=$this->PASSWORD") or die('connection failed');
		}

		public function disconnect() {
			pg_close($this->dbh);
		}

		public function query($sql) {
			$this->sth = pg_query($this->dbh, $sql) or die("cannot query");
		}

		public function fetch() {
			$rows = array();
			while($r = pg_fetch_assoc($this->sth)) {
				$rows[] = $r;
			}

			return $rows;
		}
	}
?>
