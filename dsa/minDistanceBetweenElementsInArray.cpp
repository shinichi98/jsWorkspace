class Solution{
  public:
    int minDist(int nums[], int n, int x, int y) {
    int dist = INT_MAX;
	int startIndex = -1;
	for (int i = 0; i < n; ++i)
	{
		if (nums[i] == x || nums[i] == y)
		{
			if (startIndex != -1 && nums[i] != nums[startIndex])
			{
				dist = min(dist, i - startIndex);
			}

		        startIndex = i;
		}
	}

	return (dist!=INT_MAX)?dist:-1;	
        
    }
};