INSERT INTO meetings (
  date, meeting_type, presiding, conducting, announcements,
  opening_hymn, opening_prayer, ward_business, stake_business,
  sacrament_hymn, speakers, closing_hymn, closing_prayer
) VALUES
(
  '2026-01-04', 'testimony', 'Bishop Thompson', 'Brother Nakamura',
  ARRAY[]::TEXT[],
  '{"number":134,"title":"I Believe in Christ"}', 'Sister Park',
  '[]', false,
  '{"number":175,"title":"God, Our Father, Hear Us Pray"}',
  '[]',
  '{"number":219,"title":"Because I Have Been Given Much"}', 'Brother Alvarez'
),
(
  '2026-01-11', 'regular', 'Bishop Thompson', 'Brother Nakamura',
  ARRAY['Ward temple night: Jan 30'],
  '{"number":2,"title":"The Spirit of God"}', 'Sister Ramirez',
  '[{"description":"Sustaining of new Sunday School president"}]', true,
  '{"number":169,"title":"In Remembrance of Thy Suffering"}',
  '[{"name":"Sister Chen","topic":"The Sacrament","type":"speaker"},{"name":"Brother Osei","topic":"Covenant Keeping","type":"speaker"}]',
  '{"number":31,"title":"O God, Our Help in Ages Past"}', 'Brother Lewis'
),
(
  '2026-01-18', 'regular', 'Bishop Thompson', 'Sister Torres',
  ARRAY['Ministering interviews this week'],
  '{"number":85,"title":"How Firm a Foundation"}', 'Brother Kim',
  '[{"description":"Release - Sister Martinez - Primary Teacher"},{"description":"Sustain - Sister Agbavor - Primary Teacher"},{"description":"Sustain - Sister Mukiwa - RS 2nd Counselor"}]',
  false,
  '{"number":173,"title":"While of These Emblems We Partake"}',
  '[{"name":"Sister Nakamura","topic":"Personal Revelation","type":"speaker"},{"name":"Youth Choir","topic":"","type":"musical-number"},{"name":"Brother Santos","topic":"Temple Covenants","type":"speaker"}]',
  '{"number":226,"title":"Improve the Shining Moments"}', 'Sister Jensen'
),
(
  '2026-01-25', 'stake', 'President Gimenez', 'Bishop Thompson',
  ARRAY[]::TEXT[],
  '{"number":5,"title":"High on the Mountain Top"}', 'Sister Williams',
  '[]', true,
  '{"number":169,"title":"In Remembrance of Thy Suffering"}',
  '[{"name":"President Gimenez","topic":"Building Zion Together","type":"speaker"}]',
  '{"number":250,"title":"We Are All Enlisted"}', 'Brother Alvarez'
),
(
  '2026-02-01', 'general', 'President Nelson', 'President Oaks',
  ARRAY['General conference follow-up discussion'],
  '{"number":19,"title":"We Thank Thee, O God, for a Prophet"}', 'Sister Eubank',
  '[]', false,
  '{"number":174,"title":"While of These Emblems We Partake"}',
  '[{"name":"Elder Stevenson","topic":"Discipleship in Daily Life","type":"speaker"}]',
  '{"number":2,"title":"The Spirit of God"}', 'Brother Lewis'
),
(
  '2026-02-08', 'testimony', 'Bishop Thompson', 'Brother Nakamura',
  ARRAY['Fast and testimony meeting'],
  '{"number":85,"title":"How Firm a Foundation"}', 'Brother Kim',
  '[]', false,
  '{"number":175,"title":"O God, the Eternal Father"}',
  '[{"name":"Sister Adeyemi","topic":"Gratitude","type":"speaker"},{"name":"Brother Patel","topic":"Trust in the Lord","type":"speaker"}]',
  '{"number":303,"title":"Keep the Commandments"}', 'Sister Park'
),
(
  '2026-02-15', 'regular', 'Bishop Thompson', 'Sister Torres',
  ARRAY['Ward service activity: Feb 21'],
  '{"number":66,"title":"Rejoice, the Lord Is King!"}', 'Sister Ramirez',
  '[{"description":"Sustaining of new Primary teacher"}]', false,
  '{"number":183,"title":"In Remembrance of Thy Suffering"}',
  '[{"name":"Brother Okafor","topic":"Covenants and Service","type":"speaker"},{"name":"Sister Chen","topic":"Finding Peace in Christ","type":"speaker"}]',
  '{"number":296,"title":"Our Lovely Deseret"}', 'Brother Santos'
),
(
  '2026-02-22', 'stake', 'President Gimenez', 'Bishop Thompson',
  ARRAY['Stake conference at the stake center'],
  '{"number":16,"title":"What Glorious Scenes Mine Eyes Behold"}', 'Sister Williams',
  '[]', true,
  '{"number":195,"title":"How Great the Wisdom and the Love"}',
  '[{"name":"Stake Choir","topic":"Consider the Lilies","type":"musical-number"},{"name":"President Gimenez","topic":"Strengthening Faith at Home","type":"speaker"}]',
  '{"number":5,"title":"High on the Mountain Top"}', 'Sister Jensen'
),
(
  '2026-11-15', 'regular', 'Bishop Smith', 'Brother Phillips',
  ARRAY['Ward service activity after meetings'],
  '{"number":2,"title":"The Spirit of God"}', 'Sister Williams',
  '[]', false,
  '{"number":169,"title":"As Now We Take the Sacrament"}',
  '[{"name":"Sister Emily Brown","topic":"Following the Savior","type":"speaker"},{"name":"Elder Carter","topic":"Serving One Another","type":"speaker"}]',
  '{"number":31,"title":"O God, Our Help in Ages Past"}', 'Brother Davis'
);
