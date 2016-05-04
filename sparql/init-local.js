$(document)
		.ready(
				function() {
					var sampleQuery1 = "PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nPREFIX frbr: <http://purl.org/vocab/frbr/core#>\nPREFIX dct: <http://purl.org/dc/terms/>\n\nSELECT ?work ?date ?title WHERE {\n\t?work a frbr:Work .\n\t?work dct:title ?title .\n\t?work dct:created ?date .\n\tFILTER (?date >= '2010-10-15'^^xsd:date)\n}\nORDER BY desc(?date)\nLIMIT 100";

					var sampleQuery2 = "PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\n\nCONSTRUCT {?s ?p ?o}\nWHERE {\n\tGRAPH <http://www.legislation.gov.uk/id/uksi/2010/2581>\n\t{?s ?p ?o}\n}";

					var sampleQuery3 = "PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nPREFIX gzt: <http://www.gazettes-online.co.uk/ontology#>\n\nSELECT ?n WHERE {\n\t?n a gzt:Notice .\n\t?n gzt:hasPublicationDate ?d .\n\tFILTER (?d >= '2010-09-01'^^xsd:date)\n}\nORDER BY ?d\nLIMIT 100";

          var sampleQuery4 = "select ?telleobjekt where {?telleobjekt <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://test-psi.udir.no/ontologi/kl06/laereplan>.}";

					var flintConfig = {
						"interface" : {
							"toolbar" : true,
							"menu" : true
						},
						"namespaces" : [
								{
									"name" : "Friend of a friend",
									"prefix" : "foaf",
									"uri" : "http://xmlns.com/foaf/0.1/"
								},
								{
									"name" : "XML schema",
									"prefix" : "xsd",
									"uri" : "http://www.w3.org/2001/XMLSchema#"
								},
								{
									"name" : "SIOC",
									"prefix" : "sioc",
									"uri" : "http://rdfs.org/sioc/ns#"
								},
								{
									"name" : "Resource Description Framework",
									"prefix" : "rdf",
									"uri" : "http://www.w3.org/1999/02/22-rdf-syntax-ns#"
								},
								{
									"name" : "Resource Description Framework schema",
									"prefix" : "rdfs",
									"uri" : "http://www.w3.org/2000/01/rdf-schema#"
								},
								{
									"name" : "Dublin Core",
									"prefix" : "dc",
									"uri" : "http://purl.org/dc/elements/1.1/"
								},
								{
									"name" : "Dublin Core terms",
									"prefix" : "dct",
									"uri" : "http://purl.org/dc/terms/"
								},
								{
									"name" : "Creative Commons",
									"prefix" : "cc",
									"uri" : "http://www.creativecommons.org/ns#"
								},
								{
									"name" : "Web Ontology Language",
									"prefix" : "owl",
									"uri" : "http://www.w3.org/2002/07/owl#"
								},
								{
									"name" : "Simple Knowledge Organisation System",
									"prefix" : "skos",
									"uri" : "http://www.w3.org/2004/02/skos/core#"
								},
								{
									"name" : "Geography",
									"prefix" : "geo",
									"uri" : "http://www.w3.org/2003/01/geo/wgs84_pos#"
								},
								{
									"name" : "Geonames",
									"prefix" : "geonames",
									"uri" : "http://www.geonames.org/ontology#"
								},
								{
									"name" : "DBPedia property",
									"prefix" : "dbp",
									"uri" : "http://dbpedia.org/property/"
								},
								{
									"name" : "Open Provenance Model Vocabulary",
									"prefix" : "opmv",
									"uri" : "http://purl.org/net/opmv/ns#"
								},
								{
									"name" : "Functional Requirements for Bibliographic Records",
									"prefix" : "frbr",
									"uri" : "http://purl.org/vocab/frbr/core#"
								}

						],
						"defaultEndpointParameters" : {
							"queryParameters" : {
								"format" : "output",
								"query" : "query",
								"update" : "update"
							},
							"selectFormats" : [  {
								"name" : "SPARQL-XML",
								"format" : "sparql",
								"type" : "application/sparql-results+xml"
							}, {
								"name" : "JSON",
								"format" : "json",
								"type" : "application/sparql-results+json"
							} ],
							"constructFormats" : [ {
								"name" : "Plain text",
								"format" : "text",
								"type" : "text/plain"
							}, {
								"name" : "RDF/XML",
								"format" : "rdfxml",
								"type" : "application/rdf+xml"
							}, {
								"name" : "Turtle",
								"format" : "turtle",
								"type" : "application/turtle"
							} ]
						},
						"endpoints" : [
							{
								"name" : "Kl06 Test",
								"uri" : "http://test-data.udir.no/kl06/sparql",
								"modes" : ["sparql10"],
								queries : [
										{
											"name" : "Uthenting av type",
											"description" : "Uthenting av alle lærplaner",
											"query" : sampleQuery4
										}]
							},
							{
								"name" : "Kl06 Beta",
								"uri" : "http://beta-data.udir.no/kl06/sparql",
								"modes" : ["sparql10"],
								queries : [
										{
											"name" : "Uthenting av type",
											"description" : "Uthenting av alle lærplaner",
											"query" : sampleQuery4
										}]
							},
							{
								"name" : "Kl06 QA",
								"uri" : "http://qa-data.udir.no/kl06/sparql",
								"modes" : ["sparql10"],
								queries : [
										{
											"name" : "Uthenting av type",
											"description" : "Uthenting av alle lærplaner",
											"query" : sampleQuery4
										}]
							},
							{
								"name" : "Kl06 Prod",
								"uri" : "http://data.udir.no/kl06/sparql",
								"modes" : ["sparql10"],
								queries : [
										{
											"name" : "Uthenting av type",
											"description" : "Uthenting av alle lærplaner",
											"query" : sampleQuery4
										}]
							}
						 ],
						"defaultModes" : [ {
							"name" : "SPARQL 1.0",
							"mode" : "sparql10"
						}, {
							"name" : "SPARQL 1.1 Query",
							"mode" : "sparql11query"
						}, {
							"name" : "SPARQL 1.1 Update",
							"mode" : "sparql11update"
						} ]
					}

					var flintEd = new FlintEditor("flint-test",
							"sparql/images", flintConfig);
				});
