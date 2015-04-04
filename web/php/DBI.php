<?php
	class DBI {
		private $HOST = "SQL5012.Smarterasp.net";
		private $PORT = 5432;
		private $DBNAME = "DB_9BAA67_ProjectFacility1";
		private $USERNAME = "DB_9BAA67_ProjectFacility1_admin";
		private $PASSWORD = "csci7431";
        private $connectionInfo = null;
		private $dbh = null;
		private $sth = null;

		public function connect() {
            $this->connectionInfo = array("UID" => $this->USERNAME,
                                          "PWD" => $this->PASSWORD,
                                          "Database" => $this->DBNAME);
            $this->dbh = sqlsrv_connect($this->HOST, $this->connectionInfo)
		}

		public function disconnect() {
			pg_close($this->dbh);
		}

		public function query($sql) {
			$this->sth = sqlsrv_query($this->dbh, $sql) or die("Cannot connect to database");
		}

		public function fetch() {
			$rows = array();
            
			while($r = sqlsrv_fetch_array($this->sth)) {
				$rows[] = $r;
			}

			return $rows;
		}
	}
?>
