SELECT b.address /* only querying the addresses */
FROM balances b /* starting from the balances table */
JOIN trades t ON b.address = t.address /* combine the two tables */
WHERE t.block_height > 730000 /* recent trade made */
GROUP BY b.address /* filter wallet balance */
HAVING SUM(CASE WHEN b.denom = 'usdc' THEN b.amount * 0.000001 WHEN b.denom = 'swth' THEN b.amount * 0.00000005 WHEN b.denom = 'tmz' THEN b.amount * 0.003 END) >= 500;
