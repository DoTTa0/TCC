INSERT INTO `userType`(`name`,`flagActive`,`createdAt`,`updatedAt`) VALUES
	('Admin', 1, CURRENT_TIMESTAMP(6), CURRENT_TIMESTAMP(6)),
	('Médico(a)', 1, CURRENT_TIMESTAMP(6), CURRENT_TIMESTAMP(6)),
	('Enfermeiro(a)', 1, CURRENT_TIMESTAMP(6), CURRENT_TIMESTAMP(6)),
	('Paciente', 1, CURRENT_TIMESTAMP(6), CURRENT_TIMESTAMP(6));
    
INSERT INTO `address` (`street`,`number`,`city`,`state`,`cep`,`complement`, `neighborhood`,`flagActive`,`createdAt`,`updatedAt`) VALUES 
	('Rua João Dias de Souza','365','Sorocaba','São Paulo','18048-090','Apto 11','Parque Campolim',1,CURRENT_TIMESTAMP(6),CURRENT_TIMESTAMP(6)),
	('Rua Izabel Maria Rodrigues','100','Sorocaba','São Paulo','18078-130','','Jardim Santa Cecília',1,CURRENT_TIMESTAMP(6),CURRENT_TIMESTAMP(6)),
	('Rua Fernando Rogich Vieira','566','Sorocaba','São Paulo','18071-344','Casa 40','Jardim Santa Helena',1,CURRENT_TIMESTAMP(6),CURRENT_TIMESTAMP(6)),
	('Rua Horácio Cenci','400','Sorocaba','São Paulo','18047-800','','Parque Campolim',1,CURRENT_TIMESTAMP(6),CURRENT_TIMESTAMP(6)),
	('Rua Irmã Dulce','365','Sorocaba','São Paulo','18079-685','Apto 45','Jardim Santa Madre Paulina',1,CURRENT_TIMESTAMP(6),CURRENT_TIMESTAMP(6)),
	('Rua Doutor José Júlio Fernandes de Barros','1001','Sorocaba','São Paulo','18046-100','Apto 72','Jardim dos Estados',1,CURRENT_TIMESTAMP(6),CURRENT_TIMESTAMP(6)),
	('Rua Maria das Graças Arruda P. Nardy','321','Sorocaba','São Paulo','18050-130','','Jardim Vera Cruz',1,CURRENT_TIMESTAMP(6),CURRENT_TIMESTAMP(6)),
	('Rua Quinze de Novembro','40','Sorocaba','São Paulo','18010-080','Apto 33','Centro',1,CURRENT_TIMESTAMP(6),CURRENT_TIMESTAMP(6)),
	('Rua Renato Lucci','123','Sorocaba','São Paulo','18016-329','','Jardim Residencial Martinez',1,CURRENT_TIMESTAMP(6),CURRENT_TIMESTAMP(6)),
	('Praça Maria Cristina Lolatta Pereira','857','Sorocaba','São Paulo','18051-595','','Jardim São Paulo',1,CURRENT_TIMESTAMP(6),CURRENT_TIMESTAMP(6));

INSERT INTO `users` (`name`,`userTypeId`,`birthDate`,`gender`,`addressId`,`phone`, `phoneEmergency`,`cpf`,`rg`,`nameMother`,`email`,`crm`,`coren`,`flagActive`,`createdAt`,`updatedAt`) VALUES
('Admin',1,now(),'' ,null,'', '','135.421.528-11','','' ,'' ,'' ,'' ,1,now(),now()),
-- medics
('Allana Louise Olivia Gonçalves',2,'1988-01-17','Feminino',null,'(15) 99589-0415', '','027.004.288-11','32.704.923-6','Eliane Bárbara Simone','allana_goncalves@techdomus.com.br','SP-123456','',1,now(),now()),
('Daniel Filipe Luiz Oliveira',2,'1988-01-02','Masculino',null,'(15) 99374-5900', '','744.074.268-02','19.901.385-8','Sabrina Luiza','daniel_oliveira@mcexecutiva.com.br','SP-123456','',1,now(),now()),
('Anderson Victor Yago Farias',2,'1988-01-13','Masculino',null,'(15) 98104-2018', '','866.565.468-20','45.607.838-1','Sebastiana Marina','anderson_farias@tce.am.gov.br','SP-123456','',1,now(),now()),
-- nurses
('Isabelle Liz Gabrielly da Luz',3,'1968-02-03','Feminino',null,'(19) 3761-0239', '','019.853.288-10','42.194.512-6','Jaqueline Silvana Fátima','isabelle-daluz78@vinax.com.br','','COREN-SP-123456',1,now(),now()),
('Samuel Benedito Henry Cavalcanti',3,'1992-01-06','Masculino',null,'(11) 3795-4573', '','950.867.888-70','46.622.193-9','Clarice Bianca Adriana','samuel-cavalcanti71@jotace.eti.br','','COREN-SP-123456',1,now(),now()),
('Sarah Mariana Rocha',3,'2005-02-03','Feminino',null,'(19) 2918-6503', '','573.981.978-45','40.257.542-8','Rebeca Nina','sarahmarianarocha@agnet.com.br','','COREN-SP-123456',1,now(),now()),
('Rosângela Sara Jaqueline Galvão',3,'1993-02-24','Feminino',null,'(11) 3896-2825', '','046.480.068-44','41.894.123-3','Juliana Carolina','rosangela.sara.galvao@cabletech.com.br','','COREN-SP-123456',1,now(),now()),
('Marina Kamilly Melissa Lopes',3,'1979-02-24','Feminino',null,'(19) 3815-7046', '','530.657.328-23','36.162.967-9','Fernanda Esther','marina.kamilly.lopes@gmnail.com','','COREN-SP-123456',1,now(),now()),
-- patients
('Thales Benjamin da Costa',4,'2000-01-15','Masculino',1,'(15) 93953-5739', '(15) 93953-5739','413.754.998-23','20.894.718-8','Allana Luiza Luana','thales_benjamin_dacosta@amplisat.com.br','','',1,now(),now()),
('Aurora Jéssica Rosângela Fernandes',4,'1987-02-04','Feminino',2,'(15) 93872-5432', '(15) 93872-5432','008.709.188-77','39.529.747-3','Jaqueline Alice Stefany','aurora_jessica_fernandes@santosferreira.adv.br','','',1,now(),now()),
('Sara Yasmin Allana Cardoso',4,'1978-02-18','Feminino',3,'(15) 92733-3081', '(15) 92733-3081','416.318.808-88','42.555.915-4','Louise Emily Tereza','sara_cardoso@nipbr.com','','',1,now(),now()),
('Lorena Lorena Galvão',4,'1964-02-04','Feminino',4,'(15) 93757-6149', '(15) 93757-6149','409.466.258-83','18.352.283-7','Cristiane Ayla Beatriz','lorenalorenagalvao@carubelli.com.br','','',1,now(),now()),
('Rafael Breno Cavalcanti',4,'2006-01-11','Masculino',5,'(15) 92983-2122', '(15) 92983-2122','093.272.158-34','18.907.298-2','Andreia Hadassa','rafael-cavalcanti94@hpelzer.com.br','','',1,now(),now()),
('Isabel Eloá Ramos',4,'1951-01-08','Feminino',6,'(15) 93591-8594', '(15) 93591-8594','504.443.928-23','11.203.282-5','Vera Bárbara','isabel_eloa_ramos@davimil.com.br','','',1,now(),now()),
('Sandra Sara da Paz',4,'1968-02-25','Feminino',7,'(15) 92979-1530', '(15) 92979-1530','320.808.308-48','48.428.829-5','Raimunda Sebastiana','sandra-dapaz77@liv.com','','',1,now(),now()),
('Manoel Heitor Marcos Corte Real',4,'1975-01-06','Masculino',8,'(15) 93683-0707', '(15) 93683-0707','734.219.018-72','10.949.718-1','Agatha Stefany Alice','manoel_cortereal@leandroreis.com','','',1,now(),now()),
('Renato Cláudio Caldeira',4,'1994-02-06','Masculino',9,'(15) 92687-7021', '(15) 92687-7021','257.553.778-98','33.018.469-6','Alessandra Tânia','renato_claudio_caldeira@embraer.com.br','','',1,now(),now()),
('Elza Andreia Andrea da Cruz',4,'1986-02-13','Feminino',10,'(15) 92804-9300', '(15) 92804-9300','165.254.318-08','17.400.697-4','Yasmin Fabiana Tatiane','elza.andreia.dacruz@htmail.com','','',1,now(),now());


INSERT INTO `medicalHistory` (`patientId`,`diseaseHistory`,`previousSurgeries`,`allergies`,`flagActive`,`createdAt`,`updatedAt`) VALUES 
(10,'Infância e Adolescência: Infecções comuns, sem alergias significativas.
Adolescência e Idade Adulta Jovem: Estilo de vida saudável, diagnóstico de refluxo gastroesofágico (DRGE) em seus 20 anos.
Idade Adulta: Períodos de estresse, sem histórico de doenças crônicas.','Apêndice removido aos 18 anos devido a apendicite aguda.
Cirurgia corretiva para hérnia umbilical aos 25 anos.','Alergias leves, possivelmente sazonais.
Alergias a alimentos específicos, controladas com medicação quando necessário.',1,now(),now()),
(11,'Histórico de asma desde a infância, controlada com medicação. Diagnosticado com diabetes tipo 2 aos 40 anos.','Colecistectomia aos 50 anos devido a cálculos biliares.','Alergia a poeira e ácaros, sintomas leves.',
1, now(), now()),
(12,'Sem histórico significativo de doenças na infância. Diagnosticado com depressão aos 30 anos.','Cirurgia de apendicite aos 25 anos.','Alergia a certos tipos de pólen, sintomas moderados.',
1, now(), now()),
(13,'Histórico de alergias sazonais desde a infância. Sofreu uma lesão no joelho aos 28 anos, exigindo cirurgia de reconstrução do ligamento cruzado anterior (LCA).','Nenhuma cirurgia anterior além da reconstrução do LCA.','Alergia a certos tipos de frutos do mar, sintomas leves.',
1, now(), now()),
(14,'Diagnosticado com hipertensão aos 35 anos, controlada com medicação. Cirurgia de herniorrafia umbilical aos 42 anos.','Cirurgia de herniorrafia umbilical aos 42 anos.','Alergia a determinados medicamentos, sintomas moderados.',
1, now(), now()),
(15,'Histórico de enxaqueca desde a adolescência, controlada com medicação. Cirurgia de remoção de verruga aos 20 anos.','Cirurgia de remoção de verruga aos 20 anos.','Alergia a determinados tipos de perfume, sintomas leves.',
1, now(), now()),
(16,'Diagnosticado com artrite reumatoide aos 30 anos, tratamento contínuo com medicamentos imunossupressores. Cirurgia de correção de desvio de septo nasal aos 35 anos.','Cirurgia de correção de desvio de septo nasal aos 35 anos.','Alergia a pólen e poeira, sintomas moderados.',
1, now(), now()),
(17,'Sem histórico significativo de doenças na infância. Cirurgia de correção de estrabismo aos 10 anos.','Cirurgia de correção de estrabismo aos 10 anos.','Alergia a pelo de animais, sintomas leves.',
1, now(), now()),
(18,'Histórico de gastrite desde a adolescência, controlada com dieta e medicação. Nenhuma cirurgia anterior.','Nenhuma cirurgia anterior.','Alergia a certos tipos de frutas cítricas, sintomas leves.',
1, now(), now()),
(19,'Histórico de sinusite recorrente na infância e adolescência, controlada com medicação. Nenhuma cirurgia anterior.','Nenhuma cirurgia anterior.','Alergia a mofo e ácaros, sintomas leves.',
1, now(), now());

INSERT INTO medicalProcedureSection (color, description, flagActive) VALUES
  ('#fc7703', 'Cirurgia', true),  -- Laranja
  ('#2ecc71', 'Exames', true),    -- Verde
  ('#ffdc00', 'Procedimentos', true);  -- Amarelo
  
  -- Inserir dados na tabela medicalProcedureType
INSERT INTO medicalProcedureType (medicalProcedureSectionId, name, description, flagActive) VALUES
  (1, 'Cirurgia Cardíaca', 'Procedimento cirúrgico para tratar condições cardíacas', true),
  (2, 'Ressonância Magnética', 'Exame de imagem para diagnosticar condições internas', true),
  (3, 'Cirurgia de Emergência', 'Procedimento cirúrgico imediato em situações críticas', true),
  (1, 'Cirurgia de Coluna', 'Procedimento cirúrgico para tratar condições na coluna vertebral', true),
  (2, 'Tomografia Computadorizada', 'Exame de imagem que combina raios-X para criar imagens detalhadas', true),
  (1, 'Cirurgia de Joelho', 'Procedimento cirúrgico para tratar condições no joelho', true),
  (2, 'Ultrassonografia Abdominal', 'Exame de imagem para visualizar órgãos internos no abdômen', true),
  (1, 'Cirurgia de Catarata', 'Procedimento cirúrgico para remover a catarata no olho', true);
  

-- Inserir dados na tabela medicalProcedure
INSERT INTO medicalProcedure (procedureDate, checkin, medicalProcedureTypeId, patientId, doctorId, nurseId, flagActive) VALUES
  ('2024-08-18 10:00:00', false, 1, 10, 2, 5, true),
  ('2024-07-19 14:30:00', false, 2, 10, 3, 6, true),
  ('2024-02-20 08:45:00', false, 1, 11, 2, 5, true),
  ('2024-09-21 11:20:00', false, 2, 11, 4, 6, true),
  ('2024-04-22 15:10:00', false, 1, 12, 3, 5, true),
  ('2024-02-23 09:30:00', false, 3, 13, 3, 6, true),
  ('2024-05-24 13:45:00', false, 3, 14, 3, 7, true),
  ('2024-03-25 10:30:00', false, 4, 15, 3, 8, true),
  ('2024-03-26 14:15:00', false, 5, 16, 4, 7, true),
  ('2024-03-27 09:00:00', false, 6, 17, 4, 8, true),
  ('2024-03-28 11:45:00', false, 4, 18, 4, 7, true),
  ('2024-02-29 15:30:00', false, 5, 19, 4, 8, true),
  ('2024-03-30 10:00:00', false, 7, 14, 2, 9, true),
  ('2024-03-31 14:45:00', false, 8, 16, 2, 9, true),
  ('2024-02-01 08:30:00', false, 7, 15, 2, 9, true);
  
  -- Inserir dados na tabela appointments relacionados a cada medicalProcedure
INSERT INTO appointments (medicalProcedureId, appointmentDate, reason, observations, flagActive) VALUES
  (8, '2024-01-24 09:00:00', 'Consulta pré-cirúrgica', 'Avaliação antes da cirurgia de coluna', true),
  (2, '2024-01-25 13:30:00', 'Avaliação de Imagem', 'Discussão dos resultados da ressonância magnética', true),
  (4, '2024-01-25 13:30:00', 'Avaliação de Imagem', 'Discussão dos resultados da ressonância magnética', true),
  (6, '2024-01-26 08:15:00', 'Consulta pré-cirúrgica', 'Avaliação antes da cirurgia de joelho', true),
  (13, '2024-01-27 10:45:00', 'Avaliação de Imagem', 'Discussão dos resultados da ultrassonografia abdominal', true),
  (15, '2024-01-27 10:45:00', 'Avaliação de Imagem', 'Discussão dos resultados da ultrassonografia abdominal', true),
  (14, '2024-01-28 14:30:00', 'Consulta pré-cirúrgica', 'Avaliação antes da cirurgia de catarata', true), 
  (9, '2024-01-29 09:45:00', 'Avaliação de Imagem', 'Discussão dos resultados da tomografia computadorizada', true),
  (12, '2024-01-29 09:45:00', 'Avaliação de Imagem', 'Discussão dos resultados da tomografia computadorizada', true), 
  (11, '2024-01-30 13:15:00', 'Consulta pré-cirúrgica', 'Avaliação antes da cirurgia de coluna', true),
  (1, '2024-01-31 08:45:00', 'Consulta pré-cirúrgica', 'Avaliação antes da cirurgia de coração', true),
  (3, '2024-01-31 08:45:00', 'Consulta pré-cirúrgica', 'Avaliação antes da cirurgia de coração', true),
  (5, '2024-01-31 08:45:00', 'Consulta pré-cirúrgica', 'Avaliação antes da cirurgia de coração', true);

-- Inserir dados na tabela prescriptions
INSERT INTO prescriptions (medicalProcedureId, medicament, dosage, instructions, flagActive) VALUES
  (1, 'Paracetamol', '500mg', 'Tomar 1 comprimido a cada 6 horas', true),
  (3, 'Ibuprofeno', '200mg', 'Tomar 1 comprimido a cada 8 horas', true),
  (3, 'Amoxicilina', '500mg', 'Tomar 1 comprimido a cada 12 horas', true),
  (1, 'Omeprazol', '20mg', 'Tomar 1 comprimido antes das refeições', true),
  (5, 'Dipirona', '1000mg', 'Tomar 1 comprimido a cada 6 horas, conforme necessário para dor', true),
  (6, 'Ciprofloxacino', '500mg', 'Tomar 1 comprimido a cada 12 horas por 7 dias', true),
  (8, 'Atenolol', '50mg', 'Tomar 1 comprimido por dia, de manhã', true),
  (8, 'Loratadina', '10mg', 'Tomar 1 comprimido por dia, conforme necessário para alergia', true),
  (10, 'Paracetamol', '500mg', 'Tomar 1 comprimido a cada 6 horas', true),
  (7, 'Paracetamol', '500mg', 'Tomar 1 comprimido a cada 6 horas', true),
  (11, 'Paracetamol', '500mg', 'Tomar 1 comprimido a cada 6 horas', true),
  (14, 'Omeprazol', '20mg', 'Tomar 1 comprimido antes das refeições', true);
  
  -- Inserir dados na tabela medicalRecord
INSERT INTO medicalRecord (medicalProcedureId, doctorRecord, nurseRecord, flagActive) VALUES
  (1, 'O paciente apresenta histórico de hipertensão. Recomendar acompanhamento regular da pressão arterial.', 'Paciente estável. Administrou medicamento conforme prescrição.', true),
  (2, 'Resultados da ressonância magnética indicam inflamação na articulação do joelho esquerdo. Encaminhar para consulta com ortopedista.', 'Realizou avaliação de enfermagem. Recomendou repouso e aplicação de gelo.', true),
  (13, 'Resultados da ultrassonografia abdominal indicam presença de pedra nos rins. Encaminhar para urologista.', 'Realizou avaliação de enfermagem. Recomendou aumento na ingestão de água e consulta com urologista.', true),
  (5, 'Consulta pré-cirúrgica para cirurgia de catarata marcada para 2024-04-21. Informar paciente sobre procedimentos pré-operatórios.', 'Realizou avaliação pré-operatória. Explicou procedimentos e orientações pré-cirúrgicas.', true),
  (6, 'Paciente submetido a cirurgia de emergência em 2024-02-22. Procedimento bem-sucedido. Recomendar acompanhamento pós-operatório.', 'Paciente em recuperação pós-operatória. Administrado medicamento conforme prescrição.', true),
  (7, 'Paciente em recuperação pós-operatória após cirurgia de emergência. Avaliação médica regular recomendada.', 'Realizou avaliação de enfermagem pós-operatória. Monitorar sinais vitais.', true);
