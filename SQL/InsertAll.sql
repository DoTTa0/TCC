INSERT INTO `userType`(`name`,`flagActive`,`createdAt`,`updatedAt`) VALUES
	('Admin', 1, CURRENT_TIMESTAMP(6), CURRENT_TIMESTAMP(6)),
	('Médico(a)', 1, CURRENT_TIMESTAMP(6), CURRENT_TIMESTAMP(6)),
	('Enfermeiro(a)', 1, CURRENT_TIMESTAMP(6), CURRENT_TIMESTAMP(6)),
	('Paciente', 1, CURRENT_TIMESTAMP(6), CURRENT_TIMESTAMP(6));
    
INSERT INTO `address` (`street`,`number`,`city`,`state`,`cep`,`complement`,`flagActive`,`createdAt`,`updatedAt`) VALUES 
	('Rua João Dias de Souza','365','Sorocaba','São Paulo','18048-090','Apto 11',1,CURRENT_TIMESTAMP(6),CURRENT_TIMESTAMP(6));

INSERT INTO `users` (`name`,`userTypeId`,`birthDate`,`gender`,`addressId`,`phone`,`cpf`,`rg`,`nameMother`,`email`,`crm`,`coren`,`flagActive`,`createdAt`,`updatedAt`) VALUES
('Admin' ,1,now(),'' ,null,'','','','' ,'' ,'' ,'' ,1,now(),now()),
('Allana Louise Olivia Gonçalves',2,'1988-01-17','Feminino',null,'(15) 99589-0415','027.004.288-11','32.704.923-6','Eliane Bárbara Simone','allana_goncalves@techdomus.com.br','SP-123456','',1,now(),now()),
('Daniel Filipe Luiz Oliveira',3,'1988-01-02','Masculino',null,'(15) 99374-5900','744.074.268-02','19.901.385-8','Sabrina Luiza','daniel_oliveira@mcexecutiva.com.br','','COREN-SP-123456',1,now(),now()),
('Anderson Victor Yago Farias',4,'1988-01-13','Masculino',1,'(15) 98104-2018','866.565.468-20','45.607.838-1','Sebastiana Marina','anderson_farias@tce.am.gov.br','','',1,now(),now());


INSERT INTO `medicalHistory` (`patientId`,`diseaseHistory`,`previousSurgeries`,`allergies`,`flagActive`,`createdAt`,`updatedAt`) VALUES 
(4,'Infância e Adolescência: Infecções comuns, sem alergias significativas.
Adolescência e Idade Adulta Jovem: Estilo de vida saudável, diagnóstico de refluxo gastroesofágico (DRGE) em seus 20 anos.
Idade Adulta: Períodos de estresse, sem histórico de doenças crônicas.','Apêndice removido aos 18 anos devido a apendicite aguda.
Cirurgia corretiva para hérnia umbilical aos 25 anos.','Alergias leves, possivelmente sazonais.
Alergias a alimentos específicos, controladas com medicação quando necessário.',1,now(),now());

INSERT INTO medicalProcedureSection (color, description, flagActive) VALUES
  ('#001f3f', 'Cirurgia', true),  -- Azul Marinho
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
  ('2024-08-18 10:00:00', false, 1, 4, 2, 3, true),
  ('2024-07-19 14:30:00', false, 2, 4, 2, 3, true),
  ('2024-02-20 08:45:00', false, 1, 4, 2, 3, true),
  ('2024-09-21 11:20:00', false, 2, 4, 2, 3, true),
  ('2024-04-22 15:10:00', false, 1, 4, 2, 3, true),
  ('2024-02-23 09:30:00', false, 3, 4, 2, 3, true),
  ('2024-05-24 13:45:00', false, 3, 4, 2, 3, true),
  ('2024-03-25 10:30:00', false, 4, 4, 2, 3, true),
  ('2024-03-26 14:15:00', false, 5, 4, 2, 3, true),
  ('2024-03-27 09:00:00', false, 6, 4, 2, 3, true),
  ('2024-03-28 11:45:00', false, 4, 4, 2, 3, true),
  ('2024-02-29 15:30:00', false, 5, 4, 2, 3, true),
  ('2024-03-30 10:00:00', false, 7, 4, 2, 3, true),
  ('2024-03-31 14:45:00', false, 8, 4, 2, 3, true),
  ('2024-02-01 08:30:00', false, 7, 4, 2, 3, true);
  
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
INSERT INTO prescriptions (medicalProcedureId, medicament, dosege, intructions, flagActive) VALUES
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